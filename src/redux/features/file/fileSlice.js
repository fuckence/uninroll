import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../../api/axios'

// Async thunk for uploading files
export const uploadFiles = createAsyncThunk(
    'files/upload',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post('/file/upload-files', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.status !== 201) {
                return rejectWithValue(response.data);
            }

            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const fetchFiles = createAsyncThunk('files/fetch', async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get('/file/get-files');
        if (response.status !== 200) {
            return rejectWithValue(response.data);
        }
        return response.data.files;
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: error.message });
    }
});

export const fileSlice = createSlice({
    name: 'files',
    initialState: {
        files: [],
        fetchStatus: null,
        uploadStatus: null,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(uploadFiles.pending, (state) => {
                state.uploadStatus = 'loading';
            })
            .addCase(uploadFiles.fulfilled, (state, action) => {
                state.uploadStatus = 'succeeded';
                state.files = action.payload.files; // Assuming the backend sends back the file info
            })
            .addCase(uploadFiles.rejected, (state, action) => {
                state.uploadStatus = 'failed';
                state.error = action.payload.message; // Assuming the error is sent in payload
            })
            .addCase(fetchFiles.pending, (state, action) => {
                state.fetchStatus = 'loading'
            })
            .addCase(fetchFiles.fulfilled, (state, action) => {
                state.files = action.payload;
                state.fetchStatus = 'succeeded'
            })
            .addCase(fetchFiles.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload.message;
            })
            
    }
});

export default fileSlice.reducer;