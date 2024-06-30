import React, { useState, useEffect} from 'react'
import './LoginPage.css'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'
import { loginUser } from '../../redux/features/auth/authSlice'
import { checkIsAuth } from '../../redux/features/auth/authSlice'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [messages, setMessages] = useState([]);

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
            const actionResult = await dispatch(loginUser({ email, password }));
            const result = unwrapResult(actionResult);
            if (!result.success) {
                if (Array.isArray(result.errors)) {
                    setMessages(result.errors.map(err => ({ type: 'error', text: err.text })));
                } else {
                    setMessages([{ type: 'error', text: 'Failed to sign in' }]);
                }
                return;
            }
            setMessages([{ type: 'success', text: 'Successful login' }]);
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
                        <h1>Login</h1>
                        <div className='line'></div>
                        {messages.map((msg, index) => (
                            <div key={index} className={`server-message-block ${msg.type}`}>{msg.text}</div>
                        ))}
                        {/* {message && <div className="message">{message}</div>}*/}
                        <label className='label-form'>Email
                            <input type="email" placeholder='Email' className='input-form' value={email} onChange={(event) => setEmail(event.target.value)}></input>
                        </label>
                        <label className='label-form'>Password
                            <input type="password" placeholder='Password' className='input-form' value={password} onChange={(event) => setPassword(event.target.value)}></input>
                        </label>
                        <button
                            type='submit'
                            onClick={handleSubmit}
                            className='button-form-submit'>
                            Login
                        </button>
                        <Link to={'/register'} className='link-to-form'>Does not have an account?</Link>
                    </form>
                </div>
            </div>
        </div>
        
    )
}
