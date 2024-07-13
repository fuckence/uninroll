import React, { useState, useEffect, useRef } from 'react'
import './UniversityInformationSection.css'
import InfoWrapItem from '../InfoWrapItem/InfoWrapItem'
import TableFaculty from '../TableFaculty/TableFaculty'
import { useDispatch, useSelector } from 'react-redux'
import { checkIsAuth } from '../../redux/features/auth/authSlice'
import { sendApplicationEmail, resetEmailState } from '../../redux/features/email/emailSlice'
import { useTranslation, Trans } from 'react-i18next';
import Dropdown from '../Dropdown/Dropdown'


export default function UniversityInformationSection({university}) {
    const [major, setMajor] = useState('')
    const { t, i18n } = useTranslation()
    const dispatch = useDispatch()
    const isAuth = useSelector(checkIsAuth)
    const user = useSelector(state => state.auth.user);
    const emailStatus = useSelector(state => state.email.status);
    const emailError = useSelector(state => state.email.error);
    const emailMessage = useSelector(state => state.email.message);
    const majors = university.majors[i18n.language]

    useEffect(() => {
        return () => {
            dispatch(resetEmailState());
        };
    }, [dispatch]);

    const handleSaveFiles = async () => {
        try {
            await dispatch(sendApplicationEmail({ userId: user._id, fullname: user.fullname, email: university.email, major: major, university: university.name }));
        } catch (error) {
            console.error('Error sending application:', error);
        }
    };

    const handleMajorChange = (e)=> {
        setMajor(e.target.value)
    }

    return (
    <div className='university-full-information-section'>
        <div className='overview-section'>
            <div id='overview-section'>
            <h4 className='underline-red'>{university.name}</h4>
            <p>
                {university.short_name}  {t('university_common_description')}
            </p>
            </div>
            <div className='info-wrap-container'>
                <InfoWrapItem uni_info={t('university_common_location')} uni_info2={university.location[i18n.language]} icon={'location_icon.svg'}/>
                <InfoWrapItem uni_info={t('university_common_foundation_year')} uni_info2={university.foundation_year} icon={'calendar_icon.svg'}/>
                <InfoWrapItem uni_info={t('university_common_students')} uni_info2={university.students_number} icon={'school_icon.svg'}/>
            </div>
            <div className='faculties' id='faculties-section'>
                <h4 className='underline-red' style={{marginTop: '30px'}}>{t('university_faculties_section_heading')}</h4>
                <TableFaculty university={university} />
            </div>
            <div className='' id='price-section'>
                <h4 className='underline-red' style={{marginTop: '30px'}}>{t('university_education_price_section_heading')}</h4>
                    <p>{t('university_common_price_per_credit')} {university.education_price_credit} tg</p>
                    <p>{t('university_common_credits_per_year')} {university.credits_per_year}</p>
                    <p>{t('university_common_price_per_year')} {university.education_price_year} tg</p>
            </div>
            <div className='' id='admission-section'>
                <h4 className='underline-red' style={{marginTop: '30px'}}>{t('university_admission_process_section_heading')}</h4>
                <p>{t('university_requirements_application_text')}</p>
                <ul>
                    {university.requirements[i18n.language].map((requirement, index) => (
                        <li key={index}>{requirement}</li>
                    ))}
                </ul>
                {/* <div className="file-upload-container">
                    <p>Upload necessary files in <span className='important-text'>PDF</span> format</p>
                    <label>Full name:</label> <br/>
                    <input type="text" className="user-input" id="user_fullname" name='fullname'
                           ref={fullnameRef} placeholder='Write your fullname...'/>
                    <FileUpload uploadName={'UNT certificate'} upload_id={'unt-cert'} name={'unt-cert'}
                                onFileChange={handleFileChange}/>
                    <FileUpload uploadName={'Photo size 3x4'} upload_id={'photo-3x4'} name={'photo-3x4'}
                                onFileChange={handleFileChange}/>
                    <FileUpload uploadName={'The identify document'} upload_id={'id-doc'} name={'id-doc'}
                                onFileChange={handleFileChange}/>
                    <FileUpload uploadName={'High school diploma'} upload_id={'attestat'} name={'attestat'}
                                onFileChange={handleFileChange}/>
                </div>
                <button className='save-button' onClick={handleSaveFiles} >Save</button> */}
                <p>
                    <Trans i18nKey="apply_pdf_requirement">
                        Upload the required files in <span className='important-text'>PDF</span> format to your profile page
                    </Trans>
                </p>
                { isAuth ? (
                    <div>
                        <Dropdown
                            label={t('filter_major')}
                            name="major"
                            options={majors}
                            value={major}
                            onChange={handleMajorChange}
                        />
                        <button className='save-button' onClick={handleSaveFiles} >{t('apply_button')}</button>
                    </div>
                    
                ) : (
                    <p className='important-text'>{t('apply_caution')}</p>
                )}
                {emailStatus === 'loading' && <p>Sending application...</p>}
                {emailStatus === 'succeeded' && <p>{emailMessage}</p>}
                {emailStatus === 'failed' && <p>Error: {emailError}</p>}
                
            </div>
        </div>
    </div>
    )
}
