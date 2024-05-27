import React,{ useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css'

export default function Header() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [isLanguageContainerVisible, setIsLanguageContainerVisible] = useState(false);

    const hideSidebar = () => {
      setIsSidebarVisible(false);
    };

    const showSidebar = () => {
        setIsSidebarVisible(true);
    };

    const showLanguageContainer = () => {
        setIsLanguageContainerVisible(!isLanguageContainerVisible)
    }

    return (
    <header>
        <div className="container-header">
            <div className="header-wrap">
                <div className="header-half header-left">
                    <img src={require('../../resources/logo-nobg2.png')}></img>
                </div>
                <div className="header-middle">
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/universities">Universities</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
                
                <div className="header-half header-right">
                    <ul>
                        <li className='nav-menu' onClick={showSidebar}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                        </li>
                        <li className='language-button'>
                            <a onClick={showLanguageContainer} style={{cursor: 'pointer'}}>Language &#x25BE;</a>
                        </li>
                    </ul>
                </div>
                {isLanguageContainerVisible && (
                <div className='languages-container-header'>
                    <a>
                        <img src={require('./../../resources/russia-flag-round-circle-icon.png')}></img>
                        Russian
                    </a>
                    <a>
                        <img src={require('./../../resources/kazakhstan-flag-round-circle-icon.png')}></img>
                        Kazakh
                    </a>
                    
                    <a>
                        <img src={require('./../../resources/uk-flag-round-circle-icon.png')}></img>
                        English
                    </a>
                </div>
                )}
            </div>
        </div>
        {isSidebarVisible && (
        <div className="container-sidebar">
            <ul>
                <li onClick={hideSidebar}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/universities">Universities</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li onClick={showLanguageContainer}>
                    <a>Language &#x25BE;</a>
                </li>
                {isLanguageContainerVisible && (
                <div className='languages-container'>
                    <a>Kazakh</a>
                    <a>Russian</a>
                    <a>English</a>
                </div>
                )}

                
            </ul>
        </div>
        )}
    </header>
  )
}

