import React, { useState } from 'react';
import { Link as ScrollLink, Events, animateScroll as scroll } from 'react-scroll';
import './UniversityNavigation.css';

export default function UniversityNavigation() {
  const [activeLink, setActiveLink] = useState(null); // Используйте стейт для отслеживания активной ссылки
  
  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  const handleLinkClick = (to) => {
    setActiveLink(to); // Установите активный класс при нажатии на ссылку
  };

  return (
    <div className='leftbox-sticky'>
      <div className='navigation-section'>
        <ScrollLink
          to='overview-section'
          smooth={true}
          duration={300}
          offset={-120} 
          spy={true} 
          activeClass={activeLink === 'overview-section' ? 'active' : null} 
          onSetActive={handleSetActive}
          onClick={() => handleLinkClick('overview-section')}
        >
          Overview
        </ScrollLink>
        <ScrollLink
          to='faculties-section'
          smooth={true}
          duration={300}
          offset={-120}
          spy={true}
          activeClass={activeLink === 'faculties-section' ? 'active' : null}
          onSetActive={handleSetActive}
          onClick={() => handleLinkClick('faculties-section')}
        >
          Faculties
        </ScrollLink>
        <ScrollLink
          to='price-section'
          smooth={true}
          duration={300}
          offset={-120}
          spy={true}
          activeClass={activeLink === 'price-section' ? 'active' : null} 
          onSetActive={handleSetActive}
          onClick={() => handleLinkClick('price-section')}
        >
          Education price
        </ScrollLink>
        <ScrollLink
          to='admission-section'
          smooth={true}
          duration={300}
          offset={-120}
          spy={true}
          activeClass={activeLink === 'admission-section' ? 'active' : null} 
          onSetActive={handleSetActive}
          onClick={() => handleLinkClick('admission-section')}
        >
          Admission Process
        </ScrollLink>
      </div>
    </div>
  );
}
