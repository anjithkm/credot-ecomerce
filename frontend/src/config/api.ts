export const LOCAL_URL = "http://localhost:8080"
export const REMOTE_URL = "http://52.172.50.129:8080"

console.log("Frontend NODE_ENV", process.env.NODE_ENV )

export const API_BASE_URL = `${ process.env.NODE_ENV === 'development' ? LOCAL_URL : REMOTE_URL }` 

export enum API {
  LOGIN = "/auth/login",
  LOGOUT = "/auth/logout",
  REGISTER = "/auth/register",
  CHECK_AUTH = "/auth/checkAuthorization",
  PRODUCT = "/api/products",
  PRODUCT_BY_PRODUCT_ID = "/api/products/{productId}",
  ORDER = "/api/orders",
  ORDER_BY_USER_ID = "/api/orders/{userId}",
  ORDER_BY_ORDER_ID = "/api/orders/{orderId}"
}

export const PUBLIC_END_POINTS = [
  API.REGISTER,
  API.LOGIN,
  API.LOGOUT,
];

export const PRIVATE_END_POINTS = [
  API.PRODUCT,
  API.PRODUCT_BY_PRODUCT_ID,
  API.ORDER,
  API.ORDER_BY_USER_ID,
  API.ORDER_BY_ORDER_ID
];

export default API;
