import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://77.243.81.210:8080/api',
    validateStatus: () => true,
});

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token')

    return config
})

export default instance;
