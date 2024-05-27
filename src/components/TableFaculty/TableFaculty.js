import React from 'react'
import './TableFaculty.css'

export default function TableFaculty({university}) {
  return (
    <div className='table-wrapper'>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Degrees</th>
                    <th>Duration</th>
                </tr>
            </thead>
            <tbody>
                {university.majors[0].en.map((major, index) => (
                <tr key={index}>
                    <td>{major}</td>
                    <td>Bachelor & Master</td>
                    <td>4 years</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
