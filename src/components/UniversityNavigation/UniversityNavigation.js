import React, { useState } from 'react';
import { Link as ScrollLink, Events, animateScroll as scroll } from 'react-scroll';
import './UniversityNavigation.css';
import { useTranslation } from 'react-i18next';

export default function UniversityNavigation() {
  const { t, i18n } = useTranslation() 
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
          {t('university_overview_section_heading')}
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
          {t('university_faculties_section_heading')}
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
          {t('university_education_price_section_heading')}
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
          {t('university_admission_process_section_heading')}
        </ScrollLink>
      </div>
    </div>
  );
}
