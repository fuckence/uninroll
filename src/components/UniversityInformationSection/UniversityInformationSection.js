import React from 'react'
import './UniversityInformationSection.css'
import InfoWrapItem from '../InfoWrapItem/InfoWrapItem'
import TableFaculty from '../TableFaculty/TableFaculty'
import FileUpload from '../FileUpload/FileUpload'

export default function UniversityInformationSection({university}) {
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
                    <FileUpload uploadName={'UNT certificate'}/>
                    <FileUpload uploadName={'Photo size 3x4'}/> 
                    <FileUpload uploadName={'The identify document'}/> 
                    <FileUpload uploadName={'High school diploma'}/> 
                </div>
            </div>
        </div>
    </div>
  )
}
