import axios from 'axios';
import { apiConstants } from './constants';


axios.defaults.headers.common = { 'Accept': 'application/json', 'Content-Type': 'application/json' }


axios.defaults.baseURL = apiConstants.baseUrl

axios.interceptors.request.use(function (config) {

    console.log(config)
    if(config.url.includes("?")){
        config.url=config.url+"&"+apiConstants.apiString+
        console.log(config); 
    }else{
        config.url=config.url+"?"+apiConstants.apiString;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code range of 2xx
    return response.data;
}, function (error) {

    return Promise.reject(error);
});


export default axios;