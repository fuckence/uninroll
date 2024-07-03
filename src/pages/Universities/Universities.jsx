import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header/Header'
import Filterbox from '../../components/Filterbox/Filterbox'
import universities from '../../universitylist'
import './Universities.css'
import Footer from '../../components/Footer/Footer'
import i18nextBrowserLanguagedetector from 'i18next-browser-languagedetector';

function Universities() {
    const { t, i18n } = useTranslation();
    const [filters, setFilters] = useState({
      location: '',
      major: '',
      minPrice: 0,
      maxPrice: 3000000,
    });
  
    const handleFilterChange = (e) => {
      const { name, value } = e.target;
      setFilters({
        ...filters,
        [name]: value
      });
    };

    const handleRangeChange = (value) => {
      setFilters({
        ...filters,
        minPrice: value[0],
        maxPrice: value[1]
      });
    };

    const filteredUniversities = universities.filter((university) => {
      const currentLocation = university.location[i18n.language];
      const currentMajor = university.majors[i18n.language];
      return (
        (filters.location === '' || filters.location === 'All' || filters.location === 'Все' || filters.location === 'Барлығы' || currentLocation === filters.location) &&
        (filters.major === '' || filters.major === 'All' || filters.major === 'Все' || filters.major === 'Барлығы' || currentMajor.includes(filters.major)) &&
        (university.education_price_year >= filters.minPrice) &&
        (university.education_price_year <= filters.maxPrice)
      );
    });

    const windowScrollUp = () => {
        window.scrollTo(0, 0);
    }
    
  
    return (
      <div>
        <Header />
        <div className='container-universities-filter'>
          <div className='filter-uni-wrap'>
            <Filterbox
              filters={filters}
              onChange={handleFilterChange}
              onRangeChange={handleRangeChange}
              currentLanguage={i18n.language}
            />
            <div className="university-list">
              <h1>{t('universities_heading')}</h1>
              {filteredUniversities.map((university) => (
                <div key={university.id} className="university-card">
                  <img src={university.image} alt={university.name} />
                  <div>
                    <h4>
                      <Link className='university-name' to={`/universities/${university.short_name}`}  onClick={() => {windowScrollUp()}}>
                        {university.name}
                      </Link>
                    </h4>
                    <p><span style={{fontWeight: '500', color: 'red'}}><i className="fas fa-map-marker-alt"></i></span> {university.location[i18n.language]}</p>
                    <p><span style={{fontWeight: '500'}}>{t('university_majors')}</span> {university.majors[i18n.language].join('; ')}</p>
                    <p className='price_tag'><span style={{fontWeight: '500', color: 'red'}}><i className="fa fa-dollar-sign"></i></span> {university.education_price_year} tg</p>
                    <p><span style={{fontWeight: '500', color: 'red'}}><i className="fas fa-globe"></i></span> {university.education_language[i18n.language].join(', ')}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

export default Universities