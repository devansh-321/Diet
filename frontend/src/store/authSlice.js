import { createSlice } from "@reduxjs/toolkit";
import authService from "../services/axios/auth";

export const getLogin = (param) => async (dispatch) => {
  return authService.getLogin(param)
    .then(async (resp) => {
      dispatch(setToken(resp?.data?.response?.token))
      localStorage.setItem("token", resp?.data?.response?.token);
      dispatch(setIsLoggedOn(true))
      dispatch(setAuth(resp?.data));

      return resp;
    })
    .catch((error) => {
      dispatch(setAuth(null));
      localStorage.removeItem("token");
      throw error;
    });
};

export const getLogout = () => async (dispatch) => {
  return authService.getLogout()
    .then(async (res) => {
      dispatch(setAuth(null));
      localStorage.removeItem("token");
      dispatch(setIsLoggedOn(false))
      return res;
    })
    .catch((error) => {
      return error;
    });
};

export const getSignup = (payload) => async (dispatch) => {
  return authService.getSignup(payload)
    .then(async (resp) => {
      dispatch(setToken(resp?.data?.response?.token))
      localStorage.setItem("token", resp?.data?.response?.token);
      dispatch(setIsLoggedOn(true))
      dispatch(setAuth(resp?.data));
      
      return resp;
    })
    .catch((error) => {
      return error;
    });
};

const initialState = {
  auth: null,
  isLoggedIn:false,
  token:null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.success = true;
      state.auth = action.payload;
    },
    setIsLoggedOn: (state,action)=>{
      state.isLoggedIn=action.payload
    },
    setToken: (state,action)=>{
      state.token=action.payload
    }
  },
  // Use builder callback notation for extra reducers
  extraReducers: builder => {
    // No extra reducers for now
  },
});

export const { setAuth, setIsLoggedOn, setToken } = authSlice.actions;

export default authSlice.reducer;