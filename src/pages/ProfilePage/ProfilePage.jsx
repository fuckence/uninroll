import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserDetails, getMe, updatePassword } from '../../redux/features/auth/authSlice';
import './ProfilePage.css';
import { AccountSection } from '../../components/AccountSection/AccountSection';
import { PasswordSection } from '../../components/PasswordSection/PasswordSection';
import { DocumentsSection } from '../../components/DocumentsSection/DocumentsSection';

export default function ProfilePage() {
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()

    const handleUpdateGeneralInformation = (userData) => {
        dispatch(updateUserDetails(userData));
    };

    const handleCancelUpdateGeneral = () => {
        dispatch(getMe());
    };

    const [activeTab, setActiveTab] = useState('documents');


    return (
        <>
            <Header />
            <div className='page-container'>
                <h1>User Profile</h1>
                <div className="profile-container">
                    <div className='profile-container-left'>
                        <img src={`${process.env.PUBLIC_URL}/images/user_icon.svg`} width={230} height={230}/>
                        <p className='profile-username'>{user ? user.fullname : 'Loading...'}</p>
                        <ul>
                            <li>
                                <a className={`account-sidebar-link ${activeTab === 'account' ? 'active' : ''}`} onClick={() => setActiveTab('account')}>
                                    Account
                                </a>
                            </li>
                            <li>
                                <a className={`account-sidebar-link ${activeTab === 'password' ? 'active' : ''}`} onClick={() => setActiveTab('password')}>
                                    Password
                                </a>
                            </li>
                            <li>
                                <a className={`account-sidebar-link rounded-bottom-corners ${activeTab === 'documents' ? 'active' : ''}`} onClick={() => setActiveTab('documents')}>
                                    Documents
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="profile-container-right">
                        {activeTab === 'account' && <AccountSection userData={user} onSave={handleUpdateGeneralInformation} onCancel={handleCancelUpdateGeneral} />}
                        {activeTab === 'password' && <PasswordSection />}
                        {activeTab === 'documents' && <DocumentsSection />}
                    </div>
                </div>
            </div>
        </>
    );
}
