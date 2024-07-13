import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/auth/authSlice'
import fileReducer from './features/file/fileSlice'
import emailReducer from './features/email/emailSlice'
import applicationsReducer from './features/applications/applicationsSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice,
        files: fileReducer,
        email: emailReducer,
        applications: applicationsReducer
    },
})