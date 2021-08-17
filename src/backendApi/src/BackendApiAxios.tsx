import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import localStorageService from '../../service/localStorageService';

const BackendApiAxios: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || "http://yourip"
})
BackendApiAxios.interceptors.request.use((config: AxiosRequestConfig) => {

  let accessToken = null;
  
  if (accessToken) {
    config.headers.common["Authorization"] = "Bearer " + accessToken;
  }
  
  return config;
});


export default BackendApiAxios;