import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../../api/axios'

const initialState = [

]

export const getApplications = createAsyncThunk('application/getApplications', async ()=> {
    try {
        const response = await axios.get('/application/get-applications');
        if (response.status !== 200) {
            return rejectWithValue(response.data);
        }
        return response.data.applications;
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: error.message });
    }
})

const applicationSlice = createSlice({
    name: 'application',
    initialState: {
        applications: [],
        status: null,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getApplications.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getApplications.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.applications = action.payload.applications;
                state.error = null;
            })
            .addCase(getApplications.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload.message;
            });
    }
});

export default applicationSlice.reducer;
