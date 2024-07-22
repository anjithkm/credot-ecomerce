import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../services/auth.service";
import getAuthInitalState from '@/utils/getAuthInitalState'

export interface AuthState {
  isAuthenticated: boolean;
  isAppInitialized: boolean;
  auth: any;
  error: boolean;
  loading: boolean;
  errorMessage: any;
}

export const initialState: AuthState = getAuthInitalState()

export const login = createAsyncThunk(
  "auth/login",
  async (params: any, { rejectWithValue }) => {
    try {
      const response: any = await AuthService.login(params);
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

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const response = await AuthService.logout();

      if(response.success){
        return response.data
      }else{
        return rejectWithValue( response.message || "Something went wrong");
      }

    } catch (error: any) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  },
);

export const checkAuthorization = createAsyncThunk(
  "user/checkAuthorization",
  async(params: any, { rejectWithValue }) => {
    try {

      const response: any = await AuthService.checkAuthorization(params);
      if(response.success){
        return response.data
      }else{
        return rejectWithValue( response.message || "Something went wrong");
      }

    } catch (err: any) {
      rejectWithValue(err.message || "Something went wrong");
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError(state) {
      state.error = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(checkAuthorization.pending, (state) => {
      state.isAuthenticated = false;
      state.isAppInitialized = false;
    });
    builder.addCase(checkAuthorization.fulfilled, (state, action) => {
      state.auth = action.payload;
      state.error = false
      state.isAuthenticated = true;
      state.isAppInitialized = true;
    });
    builder.addCase(checkAuthorization.rejected, (state,action) => {
      state.auth = {};
      state.error = true
      state.errorMessage = action.payload
      state.isAuthenticated = false;
      state.isAppInitialized = true;
    });
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      // window.location.replace(`/${action.payload.user}/home`)
      console.log("login fulfilled",action.payload)
      state.auth = action.payload || {};
      state.error = false;
      state.isAuthenticated = true;
      state.isAppInitialized = true;
      state.loading = false;

    });
    builder.addCase(login.rejected, (state, action) => {
      console.log("login rejected",action.payload)
      state.error = true;
      state.errorMessage =  action.payload
      state.isAppInitialized = true;
      state.isAuthenticated = false;
      state.loading = false;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.error = false;
      state.auth = {};
      state.errorMessage = {}
      state.isAppInitialized = true;
      state.isAuthenticated = false;
      state.loading = false;
    });
    builder.addCase(logout.rejected, (state,action) => {
      state.error = true;
      state.errorMessage =  action.payload
    });
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;
