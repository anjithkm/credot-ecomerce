import apiRequest from "../utils/apiRequest";
import API from "../config/api";
import { params } from '../utils/apiRequest'

const ProductService = {

  getProductsList: async (params: params = {}) => {

    try {

      const response = await apiRequest('GET',API.PRODUCT,params);

      return response

    } catch (error) {
      return error;
    }
  },

  getProductById: async (params: params = {}) => {

    try {

      const response = await apiRequest('GET',API.PRODUCT_BY_PRODUCT_ID,params);

      return response

    } catch (error) {
      return error;
    }
  },
  createProduct: async (params: params = {}) => {

    try {

      const response = await apiRequest('POST',API.PRODUCT,params);

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

  updateProductById: async (params: params = {}) => {
    try {

      const response = await apiRequest('PUT',API.PRODUCT_BY_PRODUCT_ID,params);

      if(response.success){
        localStorage.removeItem("app-auth")
      }

      return response

    } catch (error) {
      return error;
    }
  },
  DeleteProductById: async (params: params = {}) => {
    try {

      const response = await apiRequest('DELETE',API.PRODUCT_BY_PRODUCT_ID,params);

      if(response.success){
        localStorage.removeItem("app-auth")
      }

      return response

    } catch (error) {
      return error;
    }
  }
};

export default ProductService;
