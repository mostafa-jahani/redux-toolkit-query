import { configureStore } from '@reduxjs/toolkit';
import {userApi} from "./userApi";
import {postApi} from "./postApi";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([userApi.middleware, postApi.middleware])
});
