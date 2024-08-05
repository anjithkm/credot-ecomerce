import apiRequest from "../utils/apiRequest";
import API from "../config/api";
import { params } from '../utils/apiRequest'

const ProductService = {

  getProductsList: async (params: params = {}) => {

    try {

      const response = await apiRequest('GET',API.PRODUCT,params);

    //   const response: any = {
    //     "success": true,
    //     "data": {
    //         "pagination": {
    //             "page": 1,
    //             "size": 20,
    //             "totalItems": 1,
    //             "totalPages": 1
    //         },
    //         "items": [
    //             {
    //                 "_id": "66ae4a93dbd9ab276803a8a5",
    //                 "images": [
    //                     "/uploads/images/example-product.png"
    //                 ],
    //                 "name": "iPhone 14 Pro max",
    //                 "rating": 0,
    //                 "Specifications": [
    //                     "Bluetooth: V5.0"
    //                 ],
    //                 "Overview": [
    //                     null
    //                 ],
    //                 "description": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.",
    //                 "actualPrice": 5699,
    //                 "discountedPrice": 4699,
    //                 "category": "SMART PHONE",
    //                 "__v": 0
    //             },
    //             {
    //               "_id": "66ae4a93dbd9ab276803a8a5",
    //               "images": [
    //                   "/uploads/images/example-product.png"
    //               ],
    //               "name": "iPhone 14 Pro max",
    //               "rating": 0,
    //               "Specifications": [
    //                   "Bluetooth: V5.0"
    //               ],
    //               "Overview": [
    //                   null
    //               ],
    //               "description": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.",
    //               "actualPrice": 5699,
    //               "discountedPrice": 4699,
    //               "category": "SMART PHONE",
    //               "__v": 0
    //             }
    //         ]
    //     },
    //     "message": "All products data fetched successfully",
    //     "error": null
    // }


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
