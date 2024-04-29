import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isLoggedIn: false, // Add isLoggedIn state
  error: null,
  loading: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginUser: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginUserSuccess: (state, action) => {;
      state.currentUser = action.payload;
      state.isLoggedIn = true; // Set isLoggedIn to true upon successful login
      state.loading = false;
      state.error = null;
    },
    loginUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logoutUser: (state) => {
      state.currentUser = null;
      state.isLoggedIn = false; // Set isLoggedIn to false upon logout
      state.loading = false;
      state.error = null;
    },
    setUserData: (state, action) => {
      const { userData } = action.payload;
      state.currentUser = userData;
      state.isLoggedIn = true; // Set isLoggedIn to true when user data is set
      state.loading = false;
      state.error = null;
    },
    checkAuthentication: (state) => {
      // Add authentication logic if needed
    },
  },
});

export const {
  loginUser,
  loginUserSuccess,
  loginUserFailure,
  logoutUser,
  setUserData,
  checkAuthentication,
} = loginSlice.actions;

export default loginSlice.reducer;
