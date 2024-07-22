import apiRequest from "../utils/apiRequest";
import API from "../config/api";
import { params } from '../utils/apiRequest'

const AuthService = {

  register: async (params: params = {}) => {

    try {

      const response = await apiRequest('POST',API.REGISTER,params);

      return response

    } catch (error) {
      return error;
    }
  },

  checkAuthorization: async (params: params = {}) => {

    try {

      const response = await apiRequest('POST',API.CHECK_AUTH,params);

      return response

    } catch (error) {
      return error;
    }
  },
  
  login: async (params: params = {}) => {

    try {

      const response = await apiRequest('POST',API.LOGIN,params);

      if(response.success){

        const auth = JSON.stringify(response.data)

        if(response?.data){
          localStorage.setItem(
            "app-auth",
            auth
          )
        }
      }

      return response

    } catch (error) {
      return error;
    }
  },

  logout: async (params: params = {}) => {
    try {

      const response = await apiRequest('POST',API.LOGOUT,params);

      if(response.success){
        localStorage.removeItem("app-auth")
      }

      return response

    } catch (error) {
      return error;
    }
  }
};

export default AuthService;
