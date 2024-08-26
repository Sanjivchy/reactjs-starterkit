import axios from 'axios';
import { getToken, getRefreshToken, setToken, setRefreshToken } from '../helpers/token.utils';
import AuthService from '../../services/auth.service';

type HttpTypes = {
  additionalHeader?: { 'Content-Type'?: string };
};

const http = (config?: HttpTypes) => {
  const baseURL = "https://dummyjson.com";
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
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  /*
   * intercepting response
   */
  instance.interceptors.response.use(
    (response) => response,
    async(error) => {
      const originalRequest = error.config;
      if(error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          const newAccessToken = await AuthService.refreshAccessToken({
            refreshToken: getRefreshToken(),
            expiresInMins: 1
          })
          const { token, refreshToken } = newAccessToken.data;
          setToken(token);
          setRefreshToken(refreshToken);
          instance.defaults.headers.Authorization = `Bearer ${token}`;
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return instance(originalRequest);
        }catch(error) {
          return Promise.reject(error);
        }
      }
      return Promise.reject(error);
    }
  )


  return instance;
};

export default http;