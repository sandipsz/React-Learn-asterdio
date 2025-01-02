import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postsReducer from "./../features/posts/postsSlice";
import userReducer from "./../features/users/userSlice";

const rootReducer = combineReducers({
  posts: postsReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
