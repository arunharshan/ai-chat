import React,{createContext,useContext, useEffect, useState} from 'react'

type ThemeTypes = {
    theme: string,
    toggleTheme:()=> void
}
const ThemeContext = createContext<ThemeTypes>({theme:'dark', toggleTheme:()=>{}});

export const ThemeProvider = ({children}:{children:React.ReactNode}) =>{
    const [theme, setTheme] = useState<string>(()=> localStorage.getItem('ai-chat-theme')|| 'light');

    useEffect(()=>{
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('ai-chat-theme', theme);
    },[theme])

    const toggleTheme = () => {
        setTheme( prev => (prev === 'light' ? 'dark' : 'light'));
    }
    return <ThemeContext.Provider value={{toggleTheme, theme}}>
        {children}
    </ThemeContext.Provider>
}

export const useTheme = ()=> useContext(ThemeContext);
