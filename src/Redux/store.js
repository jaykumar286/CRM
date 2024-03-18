import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./Slices/AuthSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

export default store;
