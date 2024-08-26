import axios from 'axios';
import {authService} from '../../services/auth.service';

type HttpTypes = {
  additionalHeader?: { 'Content-Type'?: string };
};


const http = (config?: HttpTypes) => {
  const baseURL = "https://dummyjson.com/";

  /*
   * axios config
   * */
  const axiosConfig = {
    baseURL: baseURL,
    headers: {
      'Content-Type': 'application/json',
      ...config?.additionalHeader,
    },
  };

  
  const instance = axios.create(axiosConfig);

  /*
   * intercepting request
   * */
  instance.interceptors.request.use((config) => {
    const token = authService.getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  /*
   * intercepting response
   * */
  instance.interceptors.response.use(
    (response)=> response, 
    async(error) => {
      const originalRequest = error.config;
      if(error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          const newAccessToken = await authService.refreshAccessToken();
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return instance(originalRequest);
        } catch (refreshError) {
          console.error('Token refresh failed:', refreshError);
          return Promise.reject(refreshError);
        }
      }
      return Promise.reject(error);
    })

  return instance;
};

export default http;