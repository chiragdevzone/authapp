"use client";

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AuthType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  authStatus: boolean;
}

const initialState: AuthType = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  authStatus: false,
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signupAuth: (state, action: PayloadAction<AuthType>) => {
      const { firstName, lastName, email, password } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
      state.email = email;
      state.password = password;
    },
    loginAuth: (state, action: PayloadAction<AuthType>) => {
      const { email, password } = action.payload;

      if (email === state.email && password === state.password) {
        state.authStatus = true;
      }
    },
    logoutAuth: (state) => {
      state.authStatus = false;
    },
  },
});

export const { signupAuth, loginAuth } = auth.actions;
export default auth.reducer;
