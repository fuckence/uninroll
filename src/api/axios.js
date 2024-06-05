import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://uninroll-back.onrender.com/',
    headers: {
        'Content-Type': 'multipart/form-data',
    },
});

export default axiosInstance;
