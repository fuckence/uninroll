import React, { useState, useEffect } from 'react'
import './RegisterPage.css'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'
import { registerUser } from '../../redux/features/auth/authSlice'
import { checkIsAuth } from '../../redux/features/auth/authSlice'
import { useTranslation } from 'react-i18next'

export default function RegisterPage() {
    const { t, i18n } = useTranslation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fullname, setFullname] = useState('')
    const [messages, setMessages] = useState([])


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isAuth = useSelector(checkIsAuth)
    const { status } = useSelector((state) => state.auth)


    useEffect(()=>{
        if(isAuth) navigate('/')
    }, [status, isAuth, navigate])


    const handleSubmit = async(event) => {
        event.preventDefault()
        try {
            const actionResult = await dispatch(registerUser({ email, password, fullname }));
            const result = unwrapResult(actionResult);
            if (!result.success) {
                if (Array.isArray(result.errors)) {
                    setMessages(result.errors.map(err => ({ type: 'error', text: err.text })));
                } else {
                    setMessages([{ type: 'error', text: 'Failed to register user' }]);
                }
                return;
            }
            setMessages([{ type: 'success', text: 'Successful registration' }]);
        } catch (error) {
            let errorText;
            if (error.response?.data?.errors) {
                errorText = error.response.data.errors.map(err => ({ type: 'error', text: err.msg }));
            } else {
                errorText = [{ type: 'error', text: "Server Internal error. Try later" }];
            }
            setMessages(errorText);
        } 
    }

    return (
        <div>
            <Header />
            <div className='container-form-background'>
                <div className='container-form'>
                    <form 
                      onSubmit={e => e.preventDefault()}
                      className='form-container'>
                        <h1>{t('register')}</h1>
                        <div className='line'></div>
                        {messages.map((msg, index) => (
                            <div key={index} className={`server-message-block ${msg.type}`}>{msg.text}</div>
                        ))}
                        <label className='label-form'>{t('sign_email')}
                            <input type="email" placeholder={t('sign_email')} className='input-form' value={email} onChange={(event) => setEmail(event.target.value)}></input>
                        </label>
                        <label className='label-form'>{t('sign_fullname')}
                            <input type="text" placeholder={t('sign_fullname')} className='input-form' value={fullname} onChange={(event) => setFullname(event.target.value)}></input>
                        </label>
                        <label className='label-form'>{t('sign_password')}
                            <input type="password" placeholder={t('sign_password')} className='input-form' value={password} onChange={(event) => setPassword(event.target.value)}></input>
                        </label>
                        <button
                            type='submit'
                            onClick={handleSubmit}
                            className='button-form-submit'>
                            {t('register')}
                        </button>
                        <Link to={'/login'} className='link-to-form'>{t('redirect_link_register')}</Link>
                    </form>
                </div>
            </div>
        </div>
        
    )
}
