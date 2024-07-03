import React, {useEffect, useRef, useState} from 'react'
import { useTranslation, Trans } from 'react-i18next';

export default function UniversityCarousel() {
    const { t } = useTranslation();
    const carouselRef = useRef(null);
    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const carousel = carouselRef.current;
      const slides = carousel ? carousel.querySelectorAll('.slide') : [];
      const prevButton = prevButtonRef.current;
      const nextButton = nextButtonRef.current;
  
      if (!carousel || slides.length === 0 || !prevButton || !nextButton) {
        return;
      }
  
      function showSlide(index) {
        slides.forEach((slide, i) => {
          slide.style.transform = `translateX(${(i - index) * 100}%)`;
          slide.style.opacity = i === index ? '1' : '0';
          slide.classList.toggle('active', i === index);
        });
      }
  
      function nextSlide() {
        setCurrentIndex(prevIndex => {
          const newIndex = prevIndex + 1 >= slides.length ? 0 : prevIndex + 1;
          showSlide(newIndex);
          return newIndex;
        });
      }
  
      function prevSlide() {
        setCurrentIndex(prevIndex => {
          const newIndex = prevIndex - 1 < 0 ? slides.length - 1 : prevIndex - 1;
          showSlide(newIndex);
          return newIndex;
        });
      }
  
      prevButton.addEventListener('click', prevSlide);
      nextButton.addEventListener('click', nextSlide);
  
      showSlide(currentIndex);
  
      // Clean up event listeners on component unmount
      return () => {
        prevButton.removeEventListener('click', prevSlide);
        nextButton.removeEventListener('click', nextSlide);
      };
    }, [currentIndex]);

  return (
    <div>
    <div className="container-university">
        <h1 className="university-heading">{t('popular_heading')}</h1>
        <div className="horizontal-line"></div>
        <div className="carousel" ref={carouselRef}>
            <div className="slide active">
                <div className="uni-information-container">
                    <div className="basic-inf-uni-section uni-wrap-content">
                        <h1>
                            {t('kimep_university')}
                        </h1>
                        <p>
                            {t('university_category')} <span style={{color: 'red'}}>{t('kimep_university_category')}</span><br></br>
                            {t('university_location')} <span style={{color: 'red'}}>{t('kimep_university_location')}</span>
                        </p>
                    </div>
                    <div className="basic-uni-desc-section uni-wrap-content">
                        <p>
                            {t('kimep_university_description')}
                        </p>
                    </div>
                    <div className="basic-uni-apply-section uni-wrap-content">
                        <button>{t('apply_button')}</button>
                        <p>{t('requirements_heading')}</p>
                        <ul>
                            <li>
                                {t('requirement_1')}
                            </li>
                            <li>
                                {t('requirement_2')}
                            </li>
                            <li>
                                {t('requirement_3')}                  
                            </li>
                            <li>
                                {t('requirement_4')}               
                            </li>
                            <li>
                                {t('requirement_5')}                          
                            </li>
                            <li>
                                {t('requirement_6')}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
                
            <div className="slide">
                <div className="uni-information-container">
                    <div className="basic-inf-uni-section uni-wrap-content">
                        <h1>{t('mnu')}</h1>
                        <p>
                            {t('university_category')} <span style={{color: 'red'}}>{t('mnu_category')}</span><br></br>
                            {t('university_location')} <span style={{color: 'red'}}>{t('mnu_location')}</span>
                        </p>
                    </div>
                    <div className="basic-uni-desc-section uni-wrap-content">
                        <p>
                            {t('mnu_description')}
                        </p>
                    </div>
                    <div className="basic-uni-apply-section uni-wrap-content">
                        <button>{t('apply_button')}</button>
                        <p>{t('requirements_heading')}</p>
                        <ul>
                            <li>
                                {t('requirement_1')}
                            </li>
                            <li>
                                {t('requirement_2')}
                            </li>
                            <li>
                                {t('requirement_3')}                  
                            </li>
                            <li>
                                {t('requirement_4')}               
                            </li>
                            <li>
                                {t('requirement_5')}                          
                            </li>
                            <li>
                                {t('requirement_6')}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="slide">
                <div className="uni-information-container">
                    <div className="basic-inf-uni-section uni-wrap-content">
                        <h1>{t('atyrau_oil')}</h1>
                        <p>
                        {t('university_category')} <span style={{color: 'red'}}>{t('atyrau_oil_category')}</span><br></br>
                        {t('university_location')} <span style={{color: 'red'}}>{t('atyrau_oil_location')}</span>
                        </p>
                    </div>
                    <div className="basic-uni-desc-section uni-wrap-content">
                        <p>
                            {t('atyrau_oil_description')}
                        </p>
                    </div>
                    <div className="basic-uni-apply-section uni-wrap-content">
                        <button>{t('apply_button')}</button>
                        <p>{t('requirements_heading')}</p>
                        <ul>
                            <li>
                                {t('requirement_1')}
                            </li>
                            <li>
                                {t('requirement_2')}
                            </li>
                            <li>
                                {t('requirement_3')}                  
                            </li>
                            <li>
                                {t('requirement_4')}               
                            </li>
                            <li>
                                {t('requirement_5')}                          
                            </li>
                            <li>
                                {t('requirement_6')}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="carousel-btn">
            <button className="prev-button active" ref={prevButtonRef}></button>
            <button className="next-button" ref={nextButtonRef}></button>
        </div>
    </div>
    </div>
  )
}

