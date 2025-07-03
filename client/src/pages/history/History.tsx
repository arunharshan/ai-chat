import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import '../../styles/sharedPageTemplate.scss'

const History: React.FC = () =>{
  return (
      <div className="shared-page">
        <Header />
        <section className="shared-page__body">
          <div className='shared-page__container'>
            <h1>History</h1>
          
            <h3 className="ai-toast ai-toast--success">Page under construction.</h3>             
          </div>
            <Link to="/" className="ai-toast ai-badge--with-icon navbar__about ai-w-fit" title="Home">
          <i className="ai-icon material-symbols-outlined">
            home
          </i>Home
        </Link>
        </section>
        
      </div>
  );
};
export default History;
