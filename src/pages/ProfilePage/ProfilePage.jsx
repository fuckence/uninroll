import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserDetails, getMe, updatePassword } from '../../redux/features/auth/authSlice';
import './ProfilePage.css';
import { AccountSection } from '../../components/AccountSection/AccountSection';
import { ApplicationSection } from '../../components/ApplicationSection/ApplicationSection'
import { PasswordSection } from '../../components/PasswordSection/PasswordSection';
import { DocumentsSection } from '../../components/DocumentsSection/DocumentsSection';
import { useTranslation } from 'react-i18next';

export default function ProfilePage() {
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()

    const handleUpdateGeneralInformation = (userData) => {
        dispatch(updateUserDetails(userData));
    };

    const handleCancelUpdateGeneral = () => {
        dispatch(getMe());
    };
    const { t, i18n } = useTranslation()
    const [activeTab, setActiveTab] = useState('account');


    return (
        <>
            <Header />
            <div className='page-container'>
                <h1>{t('profile_heading')}</h1>
                <div className="profile-container">
                    <div className='profile-container-left'>
                        <img src={`${process.env.PUBLIC_URL}/images/user_icon.svg`} width={230} height={230}/>
                        <p className='profile-username'>{user ? user.fullname : 'Loading...'}</p>
                        <ul>
                            <li>
                                <a className={`account-sidebar-link ${activeTab === 'account' ? 'active' : ''}`} onClick={() => setActiveTab('account')}>
                                    {t('profile_account')}
                                </a>
                            </li>
                            <li>
                                <a className={`account-sidebar-link ${activeTab === 'password' ? 'active' : ''}`} onClick={() => setActiveTab('password')}>
                                    {t('profile_password')}
                                </a>
                            </li>
                            <li>
                                <a className={`account-sidebar-link ${activeTab === 'documents' ? 'active' : ''}`} onClick={() => setActiveTab('documents')}>
                                    {t('profile_documents')}
                                </a>
                            </li>
                            <li>
                                <a className={`account-sidebar-link rounded-bottom-corners ${activeTab === 'applications' ? 'active' : ''}`} onClick={() => setActiveTab('applications')}>
                                    {t('profile_applications')}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="profile-container-right">
                        {activeTab === 'account' && <AccountSection userData={user} onSave={handleUpdateGeneralInformation} onCancel={handleCancelUpdateGeneral} />}
                        {activeTab === 'password' && <PasswordSection />}
                        {activeTab === 'documents' && <DocumentsSection />}
                        {activeTab === 'applications' && <ApplicationSection />}
                    </div>
                </div>
            </div>
        </>
    );
}
