import { createSlice } from "@reduxjs/toolkit";


export interface OrderState {
  cart: Array<any>;
}

export const initialState: OrderState = {
  cart: [],
}


const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    clearData(state) {
      state = initialState
    },
    setCart(state,action){
      state.cart = action.payload
    },
  }
});

export const { clearData, setCart } = orderSlice.actions;
export default orderSlice.reducer;
