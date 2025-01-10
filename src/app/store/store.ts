"use client";
import { configureStore } from "@reduxjs/toolkit";
import watchListReducer from "./reducers/watchListSlice";
import cartSliceReducer from "./reducers/cartSlice";

export const store = configureStore({
  reducer: {
    watchList: watchListReducer,
    cart: cartSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
