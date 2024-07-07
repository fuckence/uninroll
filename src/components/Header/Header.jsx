import React,{ useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css'
import { Link } from 'react-scroll';
import { useDispatch, useSelector } from 'react-redux';
import { checkIsAuth, logout, getMe } from '../../redux/features/auth/authSlice';
import { useTranslation } from 'react-i18next'

export default function Header() {
    const dispatch = useDispatch()
    const isAuth = useSelector(checkIsAuth)
    const [username, setUsername] = useState('')
    const logoutHandler = () => {
        dispatch(logout())
        window.localStorage.removeItem('token')
    }
    const fullname = useSelector(state => state.auth.user?.fullname)
    const username1 = useSelector(state => state.auth.user?.username)
    

    useEffect(()=>{
        if(isAuth) {
            dispatch(getMe());
        }

    },[isAuth, dispatch])

     useEffect(()=>{
        if(!username1) {
            if(fullname) {
                const fullnameSplited = fullname.split(' ')
                const newusername = fullnameSplited[1]
                setUsername(newusername)
            }
        }
        setUsername(username1)
        
    }, [fullname])

    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [isLanguageContainerVisible, setIsLanguageContainerVisible] = useState(false);
    const [isLanguageContainer2Visible, setIsLanguageContainer2Visible] = useState(false);
    const [activeLink, setActiveLink] = useState(null);
    const handleSetActive = (to) => {
        setActiveLink(to);
      };
    const handleLinkClick = (to) => {
        setActiveLink(to);
      };
    const hideSidebar = () => {
      setIsSidebarVisible(false);
    };

    const showSidebar = () => {
        setIsSidebarVisible(true);
    };

    const showLanguageContainer = () => {
        setIsLanguageContainerVisible(!isLanguageContainerVisible)
    }
    const showLanguageContainer2 = () => {
        setIsLanguageContainer2Visible(!isLanguageContainer2Visible)
    }
    const windowScrollUp = () => {
        window.scrollTo(0, 0);
    }

    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };

    return (
    <header>
        <div className="container-header">
            <div className="header-wrap">
                <div className="header-half header-left">
                    <img src={`${process.env.PUBLIC_URL}/images/logo-nobg2.png`} alt={'logo'} />
                </div>
                <div className="header-middle">
                    <ul>
                        <li>
                            <NavLink to="/"  onClick={() => {windowScrollUp()}}>{t('nav_home')}</NavLink>
                        </li>
                        <li>
                            <NavLink to="/universities" onClick={() => {windowScrollUp()}}>{t('nav_universities')}</NavLink>
                        </li>
                        <li>
                            <Link 
                            className='contact-nav-button'
                            style={{userSelect: 'none'}}
                                to='contact-footer'
                                smooth={true}
                                duration={300}
                                offset={-120} 
                                spy={true} 
                                activeClass={activeLink === 'contact-footer' ? 'active' : null} 
                                onSetActive={handleSetActive}
                                onClick={() => handleLinkClick('contact-footer')}
                            >
                                {t('nav_contact')}
                            </Link>
                        </li>
                    </ul>
                </div>
                
                <div className="header-half header-right">
                    <ul>
                        <li className='nav-menu' onClick={showSidebar}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                        </li>
                        <div className='language-section'>
                            <li className='language-button'>
                                <a onClick={showLanguageContainer} style={{cursor: 'pointer', userSelect: 'none'}}>{t('nav_language')} &#x25BE;</a>
                            </li>
                            {isLanguageContainerVisible && (
                                <div className='languages-container-header'>
                                    <a onClick={()=>{changeLanguage('ru')}}>
                                        <img src={`${process.env.PUBLIC_URL}/images/russia-flag-round-circle-icon.png`} alt={'russian-lang'}/>

                                        {t('nav_lang_ru')}
                                    </a>
                                    <a onClick={()=>{changeLanguage('kz')}}>
                                        <img src={`${process.env.PUBLIC_URL}/images/kazakhstan-flag-round-circle-icon.png`} alt={'kazakh-lang'} />

                                        {t('nav_lang_kz')}
                                    </a>
                                    
                                    <a onClick={()=>{changeLanguage('en')}}>
                                        <img src={`${process.env.PUBLIC_URL}/images/uk-flag-round-circle-icon.png`} alt={'eng-lang'}  />

                                        {t('nav_lang_en')}
                                    </a>
                                </div>
                            )}
                        </div>
                        
                        { isAuth ? (
                            <div className='profile-section'>
                                <li className='profile-button'>
                                    <NavLink to="/profile" active style={{cursor: 'pointer', color: 'black'}} >
                                        <img src={`${process.env.PUBLIC_URL}/images/profile_icon.svg`} style={{marginRight: '5px'}}/>
                                        {username}
                                    </NavLink>
                                </li>
                                <li className='profile-button'>
                                    <NavLink to='/' onClick={logoutHandler} style={{cursor: 'pointer'}}><img src={`${process.env.PUBLIC_URL}/images/logout_icon.svg`} /></NavLink>
                                    
                                    
                                </li>
                            </div>
                                
                                ) : (
                                    <li className='profile-button'><NavLink to="/login" style={{color: 'black'}} onClick={() => {windowScrollUp()}}>{t('nav_login')}</NavLink></li>
                                )
                        }
                        
                    </ul>
                    
                </div>
                
            </div>
        </div>
        
        {isSidebarVisible && (
        <div className="container-sidebar">
            <ul>
                <li onClick={hideSidebar}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                </li>
                <li>
                    <NavLink to="/" onClick={() => {windowScrollUp()}}>{t('nav_home')}</NavLink>
                </li>
                <li>
                    <NavLink to="/universities" onClick={() => {windowScrollUp()}}>{t('nav_universities')}</NavLink>
                </li>
                <li>
                    <Link 
                            className='contact-nav-button'
                                to='contact-footer'
                                smooth={true}
                                duration={300}
                                offset={-120} 
                                spy={true} 
                                activeClass={activeLink === 'contact-footer' ? 'active' : null} 
                                onSetActive={handleSetActive}
                                onClick={() => handleLinkClick('contact-footer')}
                            >
                                {t('nav_contact')}
                    </Link>
                    
                </li>
                <li onClick={showLanguageContainer2}>
                    <a>{t('nav_language')} &#x25BE;</a>
                </li>
                {isLanguageContainer2Visible && (
                <div className='languages-container'>
                    <a onClick={()=>{changeLanguage('kz')}}>{t('nav_lang_kz')}</a>
                    <a onClick={()=>{changeLanguage('ru')}}>{t('nav_lang_ru')}</a>
                    <a onClick={()=>{changeLanguage('en')}}>{t('nav_lang_en')}</a>
                </div>
                )}
                { isAuth ? 
                (<li>
                    <NavLink to="/profile" style={{cursor: 'pointer'}}>{username}</NavLink>
                </li>) 
                    : 
                (<li>
                    <NavLink to={'/login'} href='/' onClick={() => {windowScrollUp()}}>{t('nav_login')}</NavLink>
                </li>) }
                { isAuth ? 
                (<li>
                    <Link onClick={logoutHandler} style={{cursor: 'pointer'}}>{t('nav_logout')}</Link>
                </li>) : (<li></li>) }                             
            </ul>
        </div>
        )}
        
    </header>
  )
}

