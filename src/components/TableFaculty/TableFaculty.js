import React from 'react'
import './TableFaculty.css'
import { useTranslation } from 'react-i18next'

export default function TableFaculty({university}) {
    const { t, i18n } = useTranslation()
  return (
    <div className='table-wrapper'>
        <table>
            <thead>
                <tr>
                    <th>{t('major_common_name')}</th>
                    <th>{t('major_common_degrees')}</th>
                    <th>{t('major_common_duration')}</th>
                </tr>
            </thead>
            <tbody>
                {university.majors[i18n.language].map((major, index) => (
                <tr key={index}>
                    <td>{major}</td>
                    <td>{t('major_common_degrees_all')}</td>
                    <td>{t('major_common_duration_all')}</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
