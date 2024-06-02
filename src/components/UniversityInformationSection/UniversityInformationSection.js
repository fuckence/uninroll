import React, { useState, useEffect } from 'react'
import './UniversityInformationSection.css'
import InfoWrapItem from '../InfoWrapItem/InfoWrapItem'
import TableFaculty from '../TableFaculty/TableFaculty'
import FileUpload from '../FileUpload/FileUpload'
import axiosInstance from "../../api/axios";


export default function UniversityInformationSection({university}) {
    const [files, setFiles] = useState({
        'unt-cert': null,
        'photo-3x4': null,
        'id-doc': null,
        'attestat': null
    });

    const handleFileChange = (upload_id, file) => {
        setFiles((prevFiles) => ({
            ...prevFiles,
            [upload_id]: file
        }));
        console.log(file);
    };

    const handeleEmailSend = async () => {
        try{
            const response = await axiosInstance.get('/email');
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSaveFiles = async () => {
        const formData = new FormData();
        Object.keys(files).forEach((key) => {
            if (files[key]) {
                formData.append(key, files[key]);
            }
        });
        try {
            const response = await axiosInstance.post('/upload-multiple', formData);
            console.log(response);
            alert('Files uploaded successfully');
        } catch (error) {
            console.error('Error uploading files:', error);
        }
    };

    const [connectionStatus, setConnectionStatus] = useState('');

    useEffect(() => {
        const checkConnection = async () => {
            try {
                const response = await axiosInstance.get('/test-connection');
                setConnectionStatus(response.data);
            } catch (error) {
                console.error('Error connecting to backend:', error);
                setConnectionStatus('Failed to connect to backend');
            }
        };

        checkConnection();
    }, []);

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
                <div className="file-upload-container">
                    <p>Upload necessary files in <span className='important-text'>PDF</span> format</p>
                    <FileUpload uploadName={'UNT certificate'} upload_id={'unt-cert'} name={'unt-cert'}
                                onFileChange={handleFileChange}/>
                    <FileUpload uploadName={'Photo size 3x4'} upload_id={'photo-3x4'} name={'photo-3x4'}
                                onFileChange={handleFileChange}/>
                    <FileUpload uploadName={'The identify document'} upload_id={'id-doc'} name={'id-doc'}
                                onFileChange={handleFileChange}/>
                    <FileUpload uploadName={'High school diploma'} upload_id={'attestat'} name={'attestat'}
                                onFileChange={handleFileChange}/>
                </div>
                <button onClick={handleSaveFiles}>Save</button>
                <p>{connectionStatus}</p>
                <button onClick={handeleEmailSend}>Save</button>
            </div>
        </div>
    </div>
    )
}
