import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://uninroll.com',
    validateStatus: () => true,
});

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token')

    return config
})

export default instance;
