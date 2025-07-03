import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";

const PageNotFound: React.FC = () => {
  return (
      <div className="shared-page">
        <Header />
        <section className="shared-page__body">
          <div className='shared-page__container'>
            <h1>Page Not Found!</h1>
            <Link to="/" className="ai-toast ai-badge--with-icon navbar__about ai-w-fit" title="Home">
          <i className="ai-icon material-symbols-outlined">
            home
          </i>Home
        </Link> 
          </div>
        </section>
      </div>
  );
};
export default PageNotFound;
