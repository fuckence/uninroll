import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updatePassword, getMe } from '../../redux/features/auth/authSlice';
import { unwrapResult } from '@reduxjs/toolkit'
import '../AccountSection/AccountSection.css'
import { useTranslation } from 'react-i18next';

export const PasswordSection = () => {
    const {t} = useTranslation()
    const [passwords, setPasswords] = useState({
        password: '',
        newpassword: '',
        newpassword2: ''
    });
    const [messages, setMessages] = useState([]);

    const dispatch = useDispatch()
    const { isLoading, message } = useSelector(state => state.auth);
    const handlePasswordInputChange = (e) => {
        const { name, value } = e.target;
        setPasswords(prevPasswords => ({
            ...prevPasswords,
            [name]: value
        }));
    };

    const handleUpdatePassword = async() => {
        if (passwords.newpassword !== passwords.newpassword2) {
            setMessages([{ type: 'error', text: "New passwords do not match." }]);
            return;
        }
        try {
            const actionResult = await dispatch(
                updatePassword({
                    oldPassword: passwords.password,
                    newPassword: passwords.newpassword
                })
            );
            const result = unwrapResult(actionResult);
            if (!result.success) {
                if (Array.isArray(result.errors)) {
                    setMessages(result.errors.map(err => ({ type: 'error', text: err.text })));
                } else {
                    setMessages([{ type: 'error', text: 'Failed to update password due to unknown error.' }]);
                }
                return;
            }
            setMessages([{ type: 'success', text: 'Password updated successfully.' }]);
            dispatch(getMe());
            setPasswords({ password: '', newpassword: '', newpassword2: '' });
        } catch (error) {
            const errorText = error.response?.data?.errors ? 
                error.response.data.errors.map(err => ({ type: 'error', text: err.msg })) : 
                [{ type: 'error', text: error.message || "Unknown error" }];
            setMessages(errorText);
        }
    }

    const handleCancelPassword = () => {
        setPasswords({ password: '', newpassword: '', newpassword2: '' });
        setMessages([]);
    };
    return (
        <div className='account-section-container'>
            <div className='account-details-section'>
                <label>{t('old_password')}:
                    <input type="password" name="password" value={passwords.password} onChange={handlePasswordInputChange} />
                </label>
                <label>{t('new_password')}:
                    <input type="password" name="newpassword" value={passwords.newpassword} onChange={handlePasswordInputChange} />
                </label>
                <label>{t('confirm_password')}:
                    <input type="password" name="newpassword2" value={passwords.newpassword2} onChange={handlePasswordInputChange} />
                </label>
                {messages.map((msg, index) => (
                    <div key={index} className={`server-message-block ${msg.type}`}>{msg.text}</div>
                ))}
            {/* {serverMessage && <div className="server-message-block">{serverMessage}</div>}   */}
            </div> 
            <div className='account-button-group'>
                <button onClick={handleUpdatePassword} disabled={isLoading}>{t('account_update')}</button>
                <button onClick={handleCancelPassword}>{t('account_cancel')}</button>
            </div>
        </div>
    )
}
