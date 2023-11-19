import axios from 'axios';


const APIinstance = axios.create({
  baseURL: 'https://pricewiz.pythonanywhere.com/api/',
});

// Global Request Interceptor
APIinstance.interceptors.request.use(
  (config) => {

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default APIinstance;
