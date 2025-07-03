import { Link } from 'react-router-dom';
import './header.scss';
import arunProfile from '../../assets/images//arun-profile-image.jpg';
import aiImage from "../../assets/images/ai-image.png";
import ThemeSwitch from '../themeSwitch/ThemeSwitch';
export default function Header() {
  return (    
    <header className='header'>
            <div className="header__title">
                <Link to="/" title="ai chat app">
                  <img src={aiImage} className='header__title-logo'/>
                 &nbsp; Ai-Chat
                </Link>
            </div>
            <div className="header__avatar">
                <ThemeSwitch />
                <img  alt="User Avatar" className="header__avatar-img" src={arunProfile} title="Arun Harshan" />
            </div>
    </header>
  )
}
