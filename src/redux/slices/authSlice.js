import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  name: null,
  email: null,
  userID: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_ACTIVE_USER: (state, action) => {
      const { userName, email, uid } = action.payload;
      state.isLoggedIn = true;
      state.name = userName;
      state.email = email;
      state.userID = uid;
    },
    REMOVE_ACTIVE_USER: (state) => {
      state.isLoggedIn = false;
      state.name = null;
      state.email = null;
      state.userID = null;
    },
  },
});
export const { SET_ACTIVE_USER ,REMOVE_ACTIVE_USER} = authSlice.actions;
export const selIsLoggedIn=state=>state.auth.isLoggedIn;
export const selName = (state) => state.auth.name;
export const selEmail = (state) => state.auth.email;
export const selUserID = (state) => state.auth.userID;
export default authSlice.reducer;
