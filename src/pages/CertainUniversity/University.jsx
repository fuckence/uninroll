import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import universities from '../../universitylist'
import './University.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import UniversityNavigation from '../../components/UniversityNavigation/UniversityNavigation';
import UniversityInformationSection from '../../components/UniversityInformationSection/UniversityInformationSection';

const University = () => {
  const { t, i18n } = useTranslation();
  const { universityName } = useParams();
  const university = universities.find(
    (uni) => uni.short_name === universityName
  );
  if (!university) {
    return <div>University not found</div>;
  }
  return (
    <div>
        <Header />
        <div className='container-university-block'>
            <div className='university-top-section-container'>
                <div className='first-half-desc'>
                    <h1>{university.name}</h1>
                    <p><span style={{fontWeight: '500', color: 'red'}}><i className="fas fa-map-marker-alt"></i></span> {university.location[i18n.language]}</p>
                    <p>{university.description[i18n.language] || university.description.en}</p>
                </div>
                <div className='second-half-desc'>
                    <img className='university-image-rounded' src={university.image} alt={'uni-image'}></img>
                    <div className="circle"></div>
                    <div className="circle2"></div>
                </div>
            </div>
            <div className='university-desc-section-container'>
                <UniversityNavigation />
                <UniversityInformationSection university={university} />
            </div>
        </div>
        <Footer />
    </div>
  );
};

export default University;
