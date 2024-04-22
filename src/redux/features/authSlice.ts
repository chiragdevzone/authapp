import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { log } from "console";
import { act } from "react-dom/test-utils";

export interface AuthType {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  authStatus?: boolean;
}

const initialState: AuthType = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  authStatus: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signupAuth: (state, action: PayloadAction<AuthType>) => {
      const { firstName, lastName, email, password } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
      state.email = email;
      state.password = password;

      console.log(state.firstName, state.lastName, state.email, state.password);
    },

    logoutAuth: (state) => {
      state.authStatus = false;
    },
  },
});

export const { signupAuth, logoutAuth } = authSlice.actions;
export default authSlice.reducer;
