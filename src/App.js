import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import Universities from './pages/Universities/Universities'
import University from './pages/CertainUniversity/University'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getMe } from './redux/features/auth/authSlice'
import ProfilePage from './pages/ProfilePage/ProfilePage'

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getMe())
  }, [dispatch])
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='universities' element={<Universities />} />
        <Route path='universities/:universityName' element={<University />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='profile' element={<ProfilePage />} />
      </Routes>
    </div>

  );
}


export default App;
