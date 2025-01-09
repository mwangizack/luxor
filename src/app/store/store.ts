"use client";
import { configureStore } from "@reduxjs/toolkit";
import watchListReducer from "./reducers/watchListSlice";

export const store = configureStore({
  reducer: {
    watchList: watchListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
