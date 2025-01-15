"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import watchListReducer from "./reducers/watchListSlice";
import cartSliceReducer from "./reducers/cartSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  watchList: watchListReducer,
  cart: cartSliceReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
