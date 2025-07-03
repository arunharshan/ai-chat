import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Props {
  markdown: string;
  speed?: number;
}

const ChatTypingStyle:React.FC<Props> = ({markdown, speed=20}) => {
const [cursor, setCursor] = useState(0);  
useEffect(() => {
    if (cursor < markdown.length) {
      const id = setTimeout(() => setCursor(cursor + 1), speed);
      return () => clearTimeout(id);
    }
  }, [cursor, markdown, speed]);
   return (
    <div className="chat__result-typing-style">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {markdown.slice(0, cursor)}
      </ReactMarkdown>
    </div>
  );
};

export default ChatTypingStyle;
