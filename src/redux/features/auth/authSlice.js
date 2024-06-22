import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../../api/axios'

const initialState = {
    user: null,
    token: null,
    isLoading: false,
    status: null,
    message: null,
}

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async ({ email, password, fullname }) => {
        try {
            const { data } = await axios.post('/auth/register', {
                email,
                password,
                fullname,
            })
            if (data.token) {
                window.localStorage.setItem('token', data.token)
            }
            return data
        } catch (error) {
            console.log(error)
        }
    },
)

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ email, password }) => {
        try {
            
            const { data } = await axios.post('/auth/login', {
                email,
                password,
            })
            if (data.token) {
                window.localStorage.setItem('token', data.token)
            }
            return data
        } catch (error) {
            console.log(error)
        }
    },
)

export const getMe = createAsyncThunk('auth/getMe', async () => {
    try {
        const { data } = await axios.get('/auth/me')
        return data
    } catch (error) {
        console.log(error)
    }
})

export const updateUserDetails = createAsyncThunk('auth/updateUser', 
    async ({ username, fullname, phoneNumber, email }) => {
        try {
            const { data } = await axios.put('/auth/update', { username, fullname, email, phoneNumber });
            if(data.token) {
                window.localStorage.setItem('token', data.token)
            }
            return data
        } catch (error) {
            console.log(error)
        }
});

export const updatePassword = createAsyncThunk(
    'auth/updatePassword',
    async ({ oldPassword, newPassword }, { rejectWithValue }) => {
        try {
            const { data } = await axios.put(`/auth/update-password`, {
                oldPassword,
                newPassword
            });
            if(data.token) {
                window.localStorage.setItem('token', data.token)
            }
            return data
        } catch (error) {
            console.log(error.response.data)
            return rejectWithValue(error.response?.data || { message: error.message });
        }
    }
);

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null
            state.token = null
            state.isLoading = false
            state.status = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
                state.status = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.status = action.payload.message;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.status = action.payload.message;
                state.isLoading = false;
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.status = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.status = action.payload.message;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = action.payload.message;
                state.isLoading = false;
            })
            .addCase(getMe.pending, (state) => {
                state.isLoading = true;
                state.status = null;
            })
            .addCase(getMe.fulfilled, (state, action) => {
                state.isLoading = false;
                state.status = null;
                state.user = action.payload?.user;
                state.token = action.payload?.token;
            })
            .addCase(getMe.rejected, (state, action) => {
                state.status = action.payload.message;
                state.isLoading = false;
            })
            .addCase(updateUserDetails.pending, (state, action) => {
                state.isLoading = true;
                state.status = 'pending';
            })
            .addCase(updateUserDetails.fulfilled, (state, action) => {
                state.isLoading = false;
                state.status = 'fulfilled';
                state.user = action.payload?.user;
                state.token = action.payload?.token;
                state.message = action.payload.message;
            })
            .addCase(updateUserDetails.rejected, (state, action) => {
                state.isLoading = false;
                state.status = 'rejected';
                state.message = action.error.message;
            })
            .addCase(updatePassword.pending, (state) => {
                state.isLoading = true;
                state.status = 'pending';
            })
            .addCase(updatePassword.fulfilled, (state, action) => {
                state.isLoading = false;
                state.status = 'fulfilled';
                state.user = action.payload?.user;
                state.token = action.payload?.token;
                state.message = action.payload.message;
            })
            .addCase(updatePassword.rejected, (state, action) => {
                state.isLoading = false;
                state.status = 'rejected';
                state.message = action.payload.message;
            })
    },
})

export const checkIsAuth = (state) => Boolean(state.auth.token)

export const { logout } = authSlice.actions
export default authSlice.reducer