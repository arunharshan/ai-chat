// here i write a context -  accept use input call api then share the data to other apps.
import React, {useState, createContext,useContext } from "react";
// import { GoogleGenAI } from "@google/genai";
import { GoogleGenerativeAI } from "@google/generative-ai";

type AiContextType = {
    userQuery:string,
    aiResponse:string,
    isLoading:boolean,
    isNewChat:boolean,
    setUserQuery:(q:string) =>void,
    fetchAiResponse:(q?:string)=>void,
    newChat:()=>void,
}
// const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_KEY });
const apiKey = import.meta.env.VITE_GEMINI_KEY as string;
const ai = new GoogleGenerativeAI(apiKey);
const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });
const AiContext = createContext<AiContextType|undefined>(undefined);

export const AiProvider:React.FC<{children:React.ReactNode}> = ({children}) =>{
    const [userQuery, setUserQuery] = useState('');
    const [aiResponse, setAiResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isNewChat,  setIsNewChat] = useState(true);
    const fetchAiResponse = async(question?:string) => {
        setIsLoading(true);
        setIsNewChat(false);
        const query = question ?? userQuery;
        try {
            const result  = await model.generateContent(query);
            // const response = await ai.models.generateContent({
            //     model: "gemini-2.5-flash",
            //     contents: query,
            // });
            const response = await result.response;
            //const text = response.text();
            setAiResponse(response?.text || '');
            setIsLoading(false);
            setUserQuery(query);
        } catch (error) {
                console.error('AI fetch answer error-', error);
                setAiResponse('Error: ' + (error as Error).message);
                setIsLoading(false);
        }
    }
    const newChat = () => {
        setIsLoading(false);
        setAiResponse('');
        setIsNewChat(true);
    }

    return<AiContext.Provider value={{userQuery,aiResponse,isLoading,isNewChat,setUserQuery,fetchAiResponse,newChat}}>{children}</AiContext.Provider>
}
export const useAiHook = () => {
    const context = useContext(AiContext);
    if (!context) throw new Error('useAiHook must be used within an AiProvider');
    return context;
}