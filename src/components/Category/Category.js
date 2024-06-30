import React from 'react'
import { useNavigate } from "react-router-dom";
import './Category.css'
import { useTranslation, Trans } from 'react-i18next'

export default function () {
  
  const { t } = useTranslation();
  const navigate = useNavigate()

  const UniversityPage = () => {
    navigate('/universities')
    window.scrollTo(0, 0);
  }

  return (
    <div className="container-category">
        <div className="category-part">
            <h1>
              <Trans i18nKey="categories_heading">
                Find <span style={{color: 'red'}}>Your</span> Dream <span style={{color: 'red'}}>Major</span>
              </Trans>
            </h1>
            <div className="category-section">
                <button className="category-btn" onClick={() => UniversityPage()}>{t('category_1')}</button>
                <button className="category-btn" onClick={() => UniversityPage()}>{t('category_2')}</button>
                <button className="category-btn" onClick={() => UniversityPage()}>{t('category_3')}</button>
                <button className="category-btn" onClick={() => UniversityPage()}>{t('category_4')}</button>
                <button className="category-btn" onClick={() => UniversityPage()}>{t('category_5')}</button>
                <button className="category-btn" onClick={() => UniversityPage()}>{t('category_6')}</button>
                <button className="category-btn" onClick={() => UniversityPage()}>{t('category_7')}</button>
                <button className="category-btn" onClick={() => UniversityPage()}>{t('category_8')}</button>
                <button className="category-btn" onClick={() => UniversityPage()}>{t('category_9')}</button>
            </div>
        </div>
    </div>
  )
}
