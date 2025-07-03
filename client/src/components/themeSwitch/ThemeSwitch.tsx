import React from 'react'
import { useTheme } from '../../context/ThemeContext';

const ThemeSwitch:React.FC = () => {

  const { theme, toggleTheme } = useTheme();
  return (
    <button className="ai-badge ai-badge--with-icon" onClick={toggleTheme} aria-label="Toggle theme" title='Switch Theme'>
        {theme === 'light' ? <i className="material-symbols-outlined ai-icon ai-icon--circle">
      light_mode
      </i> : <i className="material-symbols-outlined ai-icon ai-icon--circle">
      dark_mode
      </i>}
      </button>
  )
}

export default ThemeSwitch;
