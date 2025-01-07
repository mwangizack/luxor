"use client";
import { createSlice } from "@reduxjs/toolkit";
import { watches } from "@/app/data/watches";
import { Watch } from "@/app/data/watches";

interface CartState {
  watchesToShow: Watch[];
}

const initialState: CartState = {
  watchesToShow: watches,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    filterWatches: (state, action) => {
      state.watchesToShow = watches.filter((watch) =>
        watch.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    sortWatches: (state, action) => {
      switch (action.payload) {
        case "price descending":
          state.watchesToShow.sort((a, b) => b.price - a.price);
          break;
        case "price ascending":
          state.watchesToShow.sort((a, b) => a.price - b.price);
          break;
        default:
          state.watchesToShow.sort((a, b) => a.id - b.id);
          break;
      }
    },
  },
});

export default cartSlice.reducer;
export const { filterWatches } = cartSlice.actions;
export const { sortWatches } = cartSlice.actions;
