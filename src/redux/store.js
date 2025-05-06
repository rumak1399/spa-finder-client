import { configureStore } from "@reduxjs/toolkit";
import { baseUrl } from "./baseUrl";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [baseUrl.reducerPath]: baseUrl.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseUrl.middleware),
});

setupListeners(store.dispatch);
