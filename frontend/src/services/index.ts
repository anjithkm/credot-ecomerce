import axios,{AxiosResponse} from "axios";
import API from "@/config/api";
import { LOCAL_STORAGE_AUTH } from "@/config/const";

import { API_BASE_URL } from "@/config/api";

const service = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// Request interceptor
service.interceptors.request.use(

  (config) => {
    
    // You can modify the request config here
    // For example, add an Authorization header if needed
    const auth = window.localStorage.getItem(LOCAL_STORAGE_AUTH)

    if(auth){
      const auth_JSON = JSON.parse(auth)
      const token = auth_JSON?.token
      console.log("token",token)
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Response interceptor
service.interceptors.response.use(
  (response:AxiosResponse) => {
    // Any status code that lies within the range of 2xx causes this function to trigger
    // Do something with response data
    return response;
  },
  (error:any) => {

    if (error.response && error.response.status === 401) {
      // Handle unauthorized errors (e.g., redirect to login)
      console.log('Unauthorized, logging out...');
      localStorage.removeItem(LOCAL_STORAGE_AUTH);
      alert("Something went wrong,please login")
      // window.location.href = API.LOGIN;

    }

    return Promise.reject(error);

  }
);

export default service;