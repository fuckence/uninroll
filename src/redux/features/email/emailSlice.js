import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../api/axios'

export const sendApplicationEmail = createAsyncThunk(
    'email/sendApplicationEmail',
    async ({ userId, fullname, email }, { rejectWithValue }) => {
        try {
            const response = await axios.post('/email/send-email', { userId, fullname, email });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const emailSlice = createSlice({
    name: 'email',
    initialState: {
        status: null,
        message: null,
        error: null
    },
    reducers: {
        resetEmailState: (state) => {
            state.status = null;
            state.error = null;
            state.message = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendApplicationEmail.pending, (state) => {
                state.status = 'loading';
                state.message = null;
                state.error = null;
            })
            .addCase(sendApplicationEmail.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.message = action.payload.message;
                state.error = null;
            })
            .addCase(sendApplicationEmail.rejected, (state, action) => {
                state.status = 'failed';
                state.message = null;
                state.error = action.payload.message;
            });
    }
});

export const { resetEmailState } = emailSlice.actions;
export default emailSlice.reducer;
