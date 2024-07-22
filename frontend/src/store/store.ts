import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import OrderReducer from "./slices/order";
import ProductReducer from "./slices/product";
import CartReducer from "./slices/cart"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    order: OrderReducer,
    product: ProductReducer,
    cart: CartReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
