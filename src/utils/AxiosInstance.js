import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: `https://api.12basketsfoods.com/`,
});

axiosInstance.interceptors.request.use((config) => {
    // get token from localstorage
    const state = store.getState();
    const token = state.auth.auth.idToken;
    config.params = config.params || {};
    config.params['auth'] = token;
    return config;
});

export default axiosInstance;
