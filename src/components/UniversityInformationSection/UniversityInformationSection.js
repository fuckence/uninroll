import React, { useState, useEffect, useRef } from 'react'
import './UniversityInformationSection.css'
import InfoWrapItem from '../InfoWrapItem/InfoWrapItem'
import TableFaculty from '../TableFaculty/TableFaculty'
import { useDispatch, useSelector } from 'react-redux'
import { checkIsAuth } from '../../redux/features/auth/authSlice'
import { sendApplicationEmail, resetEmailState } from '../../redux/features/email/emailSlice'


export default function UniversityInformationSection({university}) {
    const dispatch = useDispatch()
    const isAuth = useSelector(checkIsAuth)
    const user = useSelector(state => state.auth.user);
    const emailStatus = useSelector(state => state.email.status);
    const emailError = useSelector(state => state.email.error);
    const emailMessage = useSelector(state => state.email.message);

    useEffect(() => {
        return () => {
            dispatch(resetEmailState());
        };
    }, [dispatch]);

    const handleSaveFiles = async () => {
        try {
            await dispatch(sendApplicationEmail({ userId: user._id, fullname: user.fullname, email: university.email }));
        } catch (error) {
            console.error('Error sending application:', error);
        }
    };

    return (
    <div className='university-full-information-section'>
        <div className='overview-section'>
            <div id='overview-section'>
            <h4 className='underline-red'>{university.name}</h4>
            <p>
                {university.short_name}  is an educational institution dedicated to learning and conducting productive research. 
                It holds leading positions in Kazakhstan in scientific, humanitarian, economic, political, and innovative programs. 
                The university's mission is to prepare highly qualified, intellectual scholars, businessmen, and political leaders.
            </p>
            </div>
            <div className='info-wrap-container'>
                <InfoWrapItem uni_info={'Location:'} uni_info2={university.location} icon={'location_icon.svg'}/>
                <InfoWrapItem uni_info={'Foundation year:'} uni_info2={university.foundation_year} icon={'calendar_icon.svg'}/>
                <InfoWrapItem uni_info={'Students:'} uni_info2={university.students_number} icon={'school_icon.svg'}/>
            </div>
            <div className='faculties' id='faculties-section'>
                <h4 className='underline-red' style={{marginTop: '30px'}}>Faculties</h4>
                <TableFaculty university={university} />
            </div>
            <div className='' id='price-section'>
                <h4 className='underline-red' style={{marginTop: '30px'}}>Education price:</h4>
                    <p>Price per credit: {university.education_price_credit} tg</p>
                    <p>Credits per year: {university.credits_per_year}</p>
                    <p>Price per year: {university.education_price_year} tg</p>
            </div>
            <div className='' id='admission-section'>
                <h4 className='underline-red' style={{marginTop: '30px'}}>Admission process:</h4>
                <p>Requirements for bachelor's and master's degrees:</p>
                <ul>
                    {university.requirements[0].en.map((requirement, index) => (
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
                {/* <p>{connectionStatus}</p> */}
                <p>Upload the required files in <span className='important-text'>PDF</span> format to your profile page</p>
                { isAuth ? (
                    <button className='save-button' onClick={handleSaveFiles} >Apply</button>
                ) : (
                    <p className='important-text'>You must be logged in to apply</p>
                )}
                {emailStatus === 'loading' && <p>Sending application...</p>}
                {emailStatus === 'succeeded' && <p>{emailMessage}</p>}
                {emailStatus === 'failed' && <p>Error: {emailError}</p>}
                
            </div>
        </div>
    </div>
    )
}
