import React,{useState,useEffect} from 'react'
import { useAiHook } from '../../context/AiContext';
import {LoaderLines} from '../loader/Loader';
import aiImage from '../../assets/images/ai-image.png';
import ChatTypingStyle from './ChatTypingStyle';

const QuestionBubble: React.FC<{ query: string }> = ({ query }) => {  
  return(
    <div className="chat__query-bubble">
      <p>{query}</p>
    </div>
  )
}

export default function ChatResult() {
  const{aiResponse,isLoading,userQuery} = useAiHook();
  const [query, setQuery] = useState<string>(userQuery);

   useEffect(() => {
    if(!isLoading) {
       setQuery(userQuery)
    }
   
  }, [isLoading])

  if(isLoading) {
    return <LoaderLines/>
  }
  return (
    <>
      {(aiResponse && query) ? (
        <div className="chat__result-container">
          <QuestionBubble query={query} />
          <div className="chat__result">
            <span className='chat__result-logo'>
              <img src={aiImage} alt='logo'/>
            </span>
             {/* AI answer with typing + markdown */}
            <ChatTypingStyle markdown={aiResponse} speed={5} />
          </div>
         
        </div>
      ):''}
    </>
  )
}

