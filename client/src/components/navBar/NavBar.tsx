import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useAiHook } from "../../context/AiContext";
import { useMediaQueryHook } from "../../utils/mediaQueryHook";
import {useAuthorization}  from '../../context/AuthContext';
// import { useNavigate  } from 'react-router-dom';
import "./navBar.scss";

export const NavBar: React.FC = () => {
 const [toggleNavBar, setToggleNavBar] = useState<boolean>(false);
  const { isLoading, userQuery, fetchAiResponse, newChat } = useAiHook();
  const [history, setHistory] = useState<string[]>([]);
  const isMobile = useMediaQueryHook("(max-width: 768px)");
  // const navigate = useNavigate();
  const { token,logOutUser } = useAuthorization();
  // const navBarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!isLoading && userQuery.trim() !== "") {
      setHistory((prev) => {
        if (prev.includes(userQuery)) return prev; // avoid duplicates texts
        return [...prev, userQuery];
      });
    }
  }, [isLoading]);
  const renderAuthButton = () => {
  if (token) {
    return (
      <button
        className="ai-badge ai-badge--with-icon navbar__about"
        title="Logout"
        onClick={logOutUser}
      >
        <i className="ai-icon material-symbols-outlined">lock_open</i>
        <b>{toggleNavBar && "Log Out"}</b>
      </button>
    );
  } else {
    return (
      <Link
        className="ai-badge ai-badge--with-icon navbar__about"
        title="Login"
        to="/login"
      >
        <i className="ai-icon material-symbols-outlined">key</i>
        {toggleNavBar && "Login"}
      </Link>
    );
  }
};

  
 const collapseMenuOnClick = ()=> {
    if(isMobile) {
      setToggleNavBar((prev) => !prev);
    }
  }
  return <aside className={`navbar ${!toggleNavBar ? "navbar--collapse" : ""}`}>
    <div className="navbar__header">
      <button className="navbar__hamburger-btn" onClick={()=>setToggleNavBar((prev) => !prev)}>
        <i className="ai-icon ai-icon--circle material-symbols-outlined">menu</i>
      </button>
    </div>
    <div className="navbar__body">
       <ul className="navbar__ul">
          <li className="navbar__li">
            <button onClick={()=>{newChat();collapseMenuOnClick()}} title="open new chat"  className="ai-badge ai-badge--with-icon">
                <i className="ai-icon material-symbols-outlined">add</i>
              {toggleNavBar && "New Chat"}
            </button>
          </li>
          <li
            className="navbar__li"
            title="history"
          >
            <Link className="ai-badge ai-badge--with-icon" to="/history" title="history">
            <i className="ai-icon material-symbols-outlined">search</i>
            {toggleNavBar && "Search Chat"}
            </Link>
          </li>
        </ul>
        <div className="navbar__recent-chat">
          <p className="navbar__recent-chat-title ai-badge ai-badge--with-icon">
            <i className="ai-icon material-symbols-outlined">
                  history_2
            </i>Recent Chats
          </p>
        <ul className="navbar__ul">
            {history.map((item, index) => (
              <li className="navbar__li" key={index}>
                <button
                  className="ai-ellipsis ai-badge"
                  title={item}
                  onClick={()=>{fetchAiResponse(item);collapseMenuOnClick()}}
                >
                  {item}
                </button>
              </li>
            ))}
        </ul>
        </div>
        <div className="ai-mt-auto">
        {renderAuthButton()}
          <Link className="ai-badge ai-badge--with-icon navbar__about" title="About" to="/profile">
          <i className="ai-icon material-symbols-outlined">
            article_person
          </i>
          {toggleNavBar && "About"}
        </Link>
        </div>
    </div>

  </aside>;
};
