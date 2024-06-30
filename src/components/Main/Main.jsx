import React from 'react'
import './Main.css'
import { Link } from 'react-router-dom'
import { useTranslation, Trans } from 'react-i18next'

export default function Main() {

    const { t } = useTranslation();

    return (
        <div>
            <div className="container-main">
                <div className="main-part">
                    <div className="main-left">
                        <h1 className="heading">
                            <Trans i18nKey="main_start_text_1">
                                Your <span style={{color: 'red'}} className=''>future</span><br /> starts here
                            </Trans>
                        
                        </h1>
                        <p>
                            <Trans i18nKey="main_start_text_2">
                                Apply to <span style={{color: 'red'}}>universities</span> for the first time with <span style={{color: 'red'}}>us</span>
                            </Trans>
                        </p>
                        <Link
                            className='link-to-uni'
                            to={'/universities'} 
                        >
                            {t('button_application')}
                        </Link>
                    </div>  
                    <div className="location-part">
                        <div className="image-location">
                            <img src={`${process.env.PUBLIC_URL}/images/earthspin.gif`} alt="EarthSpin" />
                        </div>
                        <p className="location-part-text">
                            <Trans i18nKey="main_right_text_location">
                                Located in <br></br> Kazakhstan
                            </Trans>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
