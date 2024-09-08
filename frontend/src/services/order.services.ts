import apiRequest from "../utils/apiRequest";
import API from "../config/api";
import { params } from '../utils/apiRequest'

const OrderService = {

  getAllOrderByUser: async (params: params = {}) => {

    try {

      const response = await apiRequest('POST',API.ORDER,params);

      return response

    } catch (error) {
      return error;
    }
  },

  createOrder: async (params: params = {}) => {

    try {

      const response = await apiRequest('POST',API.ORDER,params);

      return response

    } catch (error) {
      return error;
    }
  },

  DeleteOrderById: async (params: params = {}) => {

    try {

      const response = await apiRequest('DELETE',API.ORDER_BY_ORDER_ID,params);

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

  updateOrderById: async (params: params = {}) => {
    try {

      const response = await apiRequest('PUT',API.ORDER_BY_ORDER_ID,params);

      if(response.success){
        localStorage.removeItem("app-auth")
      }

      return response

    } catch (error) {
      return error;
    }
  }
};

export default OrderService;
