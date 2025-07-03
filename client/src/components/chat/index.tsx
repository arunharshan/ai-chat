import  { useEffect, useState } from 'react';
import ChatPromptBox from './ChatPromptBox';
import ChatResult from './ChatResult';
import { useAiHook } from '../../context/AiContext';
import {useAuthorization} from '../../context/AuthContext';
import ChatGreetUser from './chatGreetUser';
import './index.scss';

export default function ChatPanel() {
  const { token } = useAuthorization();
    const { isLoading,aiResponse,isNewChat } = useAiHook();
    const [showGreetings, setShowGreetings] = useState<boolean>(true);
    useEffect(() => {      
      if(!isLoading && aiResponse !== '') {
        setShowGreetings(false)
      }else {
        setShowGreetings(true)
      }
    }, [isLoading,aiResponse]);
    
  return (
    <div className='chat'>        
        {(showGreetings && isNewChat) ? <ChatGreetUser message={token?.name} />: ''}
            
       <ChatResult/>
       <ChatPromptBox/>        
    </div>
  )
}
