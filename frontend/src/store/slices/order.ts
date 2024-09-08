import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import OrderService from "../../services/order.services";


export interface OrderState {
  data: any;
  error: boolean;
  loading: boolean;
  errorMessage: any;
}

export const initialState: OrderState = {
    data: [],
    error: false,
    loading: false,
    errorMessage: null,
  }

export const createOrder = createAsyncThunk(
    "order/createOrder",
    async (params: any, { rejectWithValue }) => {
      try {
        const response: any = await OrderService.createOrder(params);
        if(response.success){
          return response.data
        }else{
          return rejectWithValue( response.message || "Something went wrong");
        }
  
       } catch (err: any) {
        return rejectWithValue(err.message || "Something went wrong");
        }
    },
);

export const getAllOrders = createAsyncThunk(
  "order/getAllOrders",
  async (_, { rejectWithValue }) => {
    try {
      const response: any = await OrderService.getOrderByUser();
      if(response.success){
        return response.data
      }else{
        return rejectWithValue(response.message || "Something went wrong");
      }

     } catch (err: any) {
      return rejectWithValue(err.message || "Something went wrong");
      }
  },
);

export const updateOrderByOrderID = createAsyncThunk(
    "order/updateOrderByOrderId",
    async (params: any, { rejectWithValue }) => {
      try {
        const response: any = await OrderService.updateOrderById(params);
        if(response.success){
          return response.data
        }else{
          return rejectWithValue( response.message || "Something went wrong");
        }
  
       } catch (err: any) {
        return rejectWithValue(err.message || "Something went wrong");
        }
    },
  );

export const deleteOrderByOrderID = createAsyncThunk(
  "order/deleteOrderByOrderId",
  async (params: any, { rejectWithValue }) => {
    try {
      const response: any = await OrderService.DeleteOrderById(params);
      if(response.success){
        return response.data
      }else{
        return rejectWithValue( response.message || "Something went wrong");
      }

      } catch (err: any) {
      return rejectWithValue(err.message || "Something went wrong");
      }
  },
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    clearError(state) {
      state.error = false;
      state.errorMessage = null;
    },
    clearData(state) {
      state = initialState
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createOrder.pending, (state) => {
        state.loading = true
    });
    builder.addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
    });
    builder.addCase(createOrder.rejected, (state,action) => {
        state.data = null;
        state.error = true;
        state.loading = false;
        state.errorMessage = action.payload;
    });
    builder.addCase(getAllOrders.pending, (state) => {
        state.loading = true;
    });
    builder.addCase(getAllOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
    });
    builder.addCase(getAllOrders.rejected, (state, action) => {
        state.data = null;
        state.error = true;
        state.loading = false;
        state.errorMessage = action.payload;
    });
    builder.addCase(updateOrderByOrderID.pending, (state) => {
        state.loading = true;
    });
    builder.addCase(updateOrderByOrderID.fulfilled, (state,action) => {
        state.loading = false;
        state.data = action.payload;
    });
    builder.addCase(updateOrderByOrderID.rejected, (state,action) => {
        state.data = null;
        state.error = true;
        state.loading = false;
        state.errorMessage = action.payload;
    });
    builder.addCase(deleteOrderByOrderID.pending, (state) => {
        state.loading = true;
    });
    builder.addCase(deleteOrderByOrderID.fulfilled, (state,action) => {
        state.loading = false;
        state.data = action.payload;
    });
    builder.addCase(deleteOrderByOrderID.rejected, (state,action) => {
        state.data = null;
        state.error = true;
        state.loading = false;
        state.errorMessage = action.payload;
    });
  },
});

export const { clearError,clearData } = orderSlice.actions;
export default orderSlice.reducer;
