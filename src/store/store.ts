import { configureStore } from "@reduxjs/toolkit";
import { strapiApi } from "./strapiApi";

export const store = configureStore({
  reducer: {
    [strapiApi.reducerPath]: strapiApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(strapiApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

