import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getApplications } from '../../redux/features/applications/applicationsSlice';
import './ApplicationSection.css'
export const DocumentsSection = () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const { applications, status, error } = useSelector(state => state.applications)

    useEffect(() => {
        dispatch(getApplications());
    }, [dispatch]);


    return (
        <div className='applications-container'>
            <h3>{t('applications_heading')}</h3>
            {status === 'loading' && <p>{t('state_loading')}</p>}
            {status === 'succeeded' && (
                <div className='application-container'>
                    {applications && applications.map(application => (
                        <div className='application-item-container' key={application._id}>
                            <h3>{application.university}</h3>
                            <p>{application.major}</p>
                        </div>
                    ))}
                </div>
            )}
            {status === 'failed' && <p>{t('state_failed_files')}</p>}
        </div>
    );
};
