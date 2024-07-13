import React, { useState, useEffect } from 'react'
import InputMask from 'react-input-mask';
import { useDispatch } from 'react-redux';
import { updateUserDetails } from '../../redux/features/auth/authSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import './AccountSection.css'
import { useTranslation } from 'react-i18next';

export const AccountSection = ({ userData, onSave, onCancel }) => {
    const { t } = useTranslation()
    const [editUser, setEditUser] = useState({
        username: '',
        fullname: '',
        email: '',
        phoneNumber: ''
    });
    const [messages, setMessages] = useState([]);

    const dispatch = useDispatch()


    useEffect(() => {
        if (userData) {
            setEditUser(userData);
        }
    }, [userData]);

    const handleGeneralInputChange = (e) => {
        const { name, value } = e.target;
        setEditUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    }

    const handleUpdateGeneralInformation = async() => {
        try {
            const actionResult = await dispatch(updateUserDetails(editUser))
            const result = unwrapResult(actionResult)
            if (!result.success) {
                if (Array.isArray(result.errors)) {
                    setMessages(result.errors.map(err => ({ type: 'error', text: err.text })));
                } else {
                    setMessages([{ type: 'error', text: 'Failed to update account details due to unknown error' }]);
                }
                return;
            }
            setMessages([{ type: 'success', text: 'Account details updated successfully!' }]);
            setEditUser(editUser);
        } catch (error) {
            const errorText = error.response?.data?.errors ? 
                error.response.data.errors.map(err => ({ type: 'error', text: err.msg })) : 
                [{ type: 'error', text: error.message || "Unknown error" }];
            setMessages(errorText);
        }
    };
  return (
        <div className='account-section-container'>
            <div className='account-details-section'>
                <label>{t('account_username')}:
                    <input type="text" name="username" value={editUser.username} onChange={handleGeneralInputChange} />
                </label>
                <label>{t('account_fullname')}:
                    <input type="text" name="fullname" value={editUser.fullname} onChange={handleGeneralInputChange} />
                </label>
                <label>{t('sign_email')}:
                    <input type="email" name="email" value={editUser.email} onChange={handleGeneralInputChange} />
                </label>
                <label>{t('account_phonenumber')}:
                    <InputMask 
                        mask="+7 (999) 999-99-99"
                        value={editUser.phoneNumber}
                        onChange={handleGeneralInputChange}
                        name="phoneNumber"
                        type="tel"
                        className="input-form"
                        alwaysShowMask={false} 
                    />
                </label>
                {messages.map((msg, index) => (
                            <div key={index} className={`server-message-block ${msg.type}`}>{msg.text}</div>
                ))}
            </div>
            <div className='account-button-group'>
                <button onClick={() => handleUpdateGeneralInformation(editUser)}>{t('account_update')}</button>
                <button onClick={onCancel}>{t('account_cancel')}</button>
            </div>
          
        </div>
  )
}
