"use client";
import { createSlice } from "@reduxjs/toolkit";
import { watches } from "@/app/data/watches";
import type { Watch } from "@/app/data/watches";

interface CartState {
  items: Record<number, Watch>;
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: {},
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const watchToAdd = watches.find((watch) => watch.id === action.payload);
      if (watchToAdd) {
        state.items[watchToAdd.id] = { ...watchToAdd, quantityInCart: 1 };
        state.totalQuantity++;
        state.totalPrice += watchToAdd.price;
      }
    },
    incrementQuantity: (state, action) => {
      const watchToUpdate = state.items[action.payload];
      if (watchToUpdate) {
        watchToUpdate.quantityInCart++;
        state.totalQuantity++;
        state.totalPrice += watchToUpdate.price;
      }
    },
    decrementQuantity: (state, action) => {
      const watchToUpdate = state.items[action.payload];
      if (watchToUpdate && watchToUpdate.quantityInCart > 0) {
        watchToUpdate.quantityInCart--;
        state.totalQuantity--;
        state.totalPrice -= watchToUpdate.price;
      }
    },
    removeFromCart: (state, action) => {
      const watchToRemove = state.items[action.payload];
      if (watchToRemove) {
        state.totalQuantity -= watchToRemove.quantityInCart;
        state.totalPrice -= watchToRemove.price * watchToRemove.quantityInCart;
        delete state.items[action.payload];
      }
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions;
