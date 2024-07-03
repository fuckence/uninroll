import React from 'react'
import { useTranslation, Trans } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer id='contact-footer'>
      <div className="footer-container">
        <div className="footer-contact-part footer-wrap-part">
          <h1>{t('footer_contact')}</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <Trans i18nKey="footer_address">
                Kabanbay Batyr avenue, 52<br></br>Astana NQZ, 010000
              </Trans>
            </li>
            <li>
              <i className="fas fa-phone-alt"></i>
              {t('footer_phone')}
            </li>
          </ul>
        </div>
        <div className="footer-hours-part footer-wrap-part">
          <h1>{t('footer_hours')}</h1>
          <ul>
            <li>
              <span>{t('footer_mon_fri_label')}</span> {t('footer_mon_fri_hours')}
            </li>
            <li>
              <span>{t('footer_sat_label')}</span> {t('footer_sat_hours')}
            </li>
            <li>
              <span>{t('footer_sun_label')}</span> {t('footer_sun_hours')}
            </li>
          </ul>

        </div>
        <div className="footer-apply-part footer-wrap-part">
          <h1>{t('footer_apply_support')}</h1>
          <div className="input-button-section">
            <input type="text" placeholder={t('footer_question_placeholder')} />
            <button type="submit">{t('footer_send_button')}</button>
          </div> 
          <p>{t('footer_ask_question')}</p>  
        </div>
      </div>
      <div className="footer-container-2">
        <div className="footer-left">
          <img src={`${process.env.PUBLIC_URL}/images/logo-nobg2.png`} alt="Logo" />
        </div>
        <div>
          <p>{t('footer_copyright')}</p>
        </div>
        <div className="footer-references">
          <a href=""><i className="fab fa-instagram"></i></a>
          <a href=""><i className="fab fa-whatsapp"></i></a>
          <a href=""><i className="fab fa-telegram"></i></a>
        </div>
      </div>
    </footer>
  )
}
