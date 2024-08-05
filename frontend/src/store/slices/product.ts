import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProductService from "@/services/product.service";


export interface ProductState {
  data: any;
  error: boolean;
  loading: boolean;
  errorMessage: any;
}

export const initialState: ProductState = {
    data: [],
    error: false,
    loading: false,
    errorMessage: null,
  }

export const createProduct = createAsyncThunk(
    "Product/createProduct",
    async (params: any, { rejectWithValue }) => {
      try {
        const response: any = await ProductService.createProduct(params);
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

export const getProductList = createAsyncThunk(
  "Product/getProductByUserId",
  async (_, { rejectWithValue }) => {

    try {

      const response: any = await ProductService.getProductsList();
      
      console.log("product list response",response)

      if(response.success){
        return response?.data
      }else{
        return rejectWithValue( response.message || "Something went wrong");
      }

     } catch (err: any) {
      return rejectWithValue(err.message || "Something went wrong");
      }
  },
);

export const getProductByProductID = createAsyncThunk(
    "Product/getProductByProductId",
    async (params: any, { rejectWithValue }) => {
      try {
        const response: any = await ProductService.getProductById(params);
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

export const updateProductByProductID = createAsyncThunk(
    "Product/updateProductByProductId",
    async (params: any, { rejectWithValue }) => {
      try {
        const response: any = await ProductService.updateProductById(params);
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

export const deleteProductByProductID = createAsyncThunk(
  "Product/deleteProductByProductId",
  async (params: any, { rejectWithValue }) => {
    try {
      const response: any = await ProductService.DeleteProductById(params);
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

const ProductSlice = createSlice({
  name: "Product",
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
    builder.addCase(createProduct.pending, (state) => {
        state.loading = true;
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
    });
    builder.addCase(createProduct.rejected, (state,action) => {
        state.data = null;
        state.error = true;
        state.loading = false;
        state.errorMessage = action.payload;
    });
    builder.addCase(getProductList.pending, (state) => {
        state.loading = true;
    });
    builder.addCase(getProductList.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
    });
    builder.addCase(getProductList.rejected, (state, action) => {
        state.data = null;
        state.error = true;
        state.loading = false;
        state.errorMessage = action.payload;
    });
    builder.addCase(getProductByProductID.pending, (state) => {
        state.loading = true;
    });
    builder.addCase(getProductByProductID.fulfilled, (state,action) => {
        state.loading = false;
        state.data = [action.payload]
    });
    builder.addCase(getProductByProductID.rejected, (state,action) => {
        state.data = null;
        state.error = true;
        state.loading = false;
        state.errorMessage = action.payload;
    });
    builder.addCase(updateProductByProductID.pending, (state) => {
        state.loading = true;
    });
    builder.addCase(updateProductByProductID.fulfilled, (state,action) => {
        state.loading = false;
        state.data = action.payload
    });
    builder.addCase(updateProductByProductID.rejected, (state,action) => {
        state.data = null;
        state.error = true;
        state.loading = false;
        state.errorMessage = action.payload;
    });
    builder.addCase(deleteProductByProductID.pending, (state) => {
        state.loading = true;
    });
    builder.addCase(deleteProductByProductID.fulfilled, (state,action) => {
        state.loading = false;
        state.data = action.payload;
    });
    builder.addCase(deleteProductByProductID.rejected, (state,action) => {
        state.data = null;
        state.error = true;
        state.loading = false;
        state.errorMessage = action.payload;
    });
  },
});

export const { clearError,clearData } = ProductSlice.actions;
export default ProductSlice.reducer;
