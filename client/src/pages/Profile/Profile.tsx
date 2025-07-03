import React from "react";
import Header from "../../components/header/Header";

const Profile: React.FC = () => {
  return (
      <div className="shared-page">
        <Header />
        <section className="shared-page__body">
          <div className='shared-page__container'>
            <h1>Arun Harshan</h1>
            <h2>Transforming Designs into Code | Front-End Developer(AEM)</h2>
            <ul>
              <li>HTML, CSS, JavaScript, React, TypeScript, NodeJS | More...</li>
              <li>Responsive Web development | Accessibility| More...</li>
            </ul>
            <ul>
              <li>
               <a 
  href="mailto:harshan.arun@gmail.com?subject=React%7CAI%7CChat%20App%20-%20Hello" 
  target="_blank"
  rel="noopener noreferrer"
  className="ai-toast ai-toast--message ai-badge--with-icon"
>
                  <i className="material-symbols-outlined">
email
</i>harshan.arun@gmail.com </a>
</li><li>
                <span className="ai-toast ai-toast--message ai-badge--with-icon"> <i className="material-symbols-outlined">
phone_in_talk
</i>+91-884-878-5904</span>
              </li>
            </ul>
            <ul>
              <li>
                 <a href="https://www.linkedin.com/in/arunharshan/" target="_blank" className="ai-toast ai-toast--message">LinkedIn</a>
                 <a href="https://github.com/arunharshan?tab=repositories" target="_blank" className="ai-toast ai-toast--message">GitHub</a>
              </li>
            </ul>
          </div>
        </section>
      </div>
  );
};
export default Profile;
