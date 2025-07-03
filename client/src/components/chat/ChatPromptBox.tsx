import React, { useRef, useEffect } from 'react';
import { useAiHook } from '../../context/AiContext';

const ChatPromptBox: React.FC = () => {
  const {
    userQuery,
    setUserQuery,
    fetchAiResponse,
    isLoading,
    aiResponse
  } = useAiHook();

  const submitButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (submitButtonRef.current) {
      submitButtonRef.current.disabled = userQuery.length === 0;
    }
  }, [userQuery]);

  useEffect(() => {
    if (!isLoading && aiResponse !== '') {
      setUserQuery('');
    }

    if (submitButtonRef.current) {
      submitButtonRef.current.disabled = true;
    }
  }, [isLoading, aiResponse]);

  const handleQueryInputField = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevents page reload
    fetchAiResponse();
  };

  return (
    <div className="ai-mt-auto">
      <div className="chat__prompt">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            onChange={handleQueryInputField}
            value={userQuery}
            title="Type your question"
            alt="Type your question"
            placeholder="Type your prompt"
            name="chat-input-textbox"
          />

          <div className="chat__prompt-btn-wrapper">
            <div className="chat__icon-btn-left">
              <span>
                <i
                  className="ai-icon ai-icon--circle material-symbols-outlined"
                  title="Coming soon"
                >
                  lightbulb
                </i>
              </span>
              <span className="ai-badge ai-badge--with-icon" title="Coming soon!">
                <i className="ai-icon material-symbols-outlined">globe_book</i>
                Search Chat
              </span>
            </div>

            <button
              type="submit"
              ref={submitButtonRef}
              onClick={()=>fetchAiResponse}
              className="ai-badge ai-badge-with-icon"
              title="Type your question and submit"
            >
              <i className="ai-icon material-symbols-outlined">send</i>
            </button>
          </div>
        </form>
      </div>

      <small className="chat__terms">
        Inspired by Google Gemini, this application utilizes the Gemini API.
      </small>
    </div>
  );
};

export default ChatPromptBox;
