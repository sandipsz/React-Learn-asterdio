import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface User {
  email: string;
  password: string;
  isLoggedIn: boolean;
}

interface UserState {
  currentUser: User | null;
  error: string | null;
  loading: boolean;
}

const initialState: UserState = {
  currentUser: null,
  error: null,
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
      state.loading = false;
    },
    signInFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    logout: (state) => {
      state.currentUser = null;
      state.loading = false;
    },
  },
});

export const { signInStart, signInSuccess, signInFailure, logout } =
  userSlice.actions;

export default userSlice.reducer;
