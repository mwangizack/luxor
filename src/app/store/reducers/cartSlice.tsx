"use client";
import { createSlice } from "@reduxjs/toolkit";
import { watches } from "@/app/data/watches";
import { Watch } from "@/app/data/watches";

interface CartState {
  filteredWatches: Watch[];
}

const initialState: CartState = {
  filteredWatches: watches,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    filterWatches: (state, action) => {
      state.filteredWatches = watches.filter((watch) =>
        watch.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

export default cartSlice.reducer;
export const { filterWatches } = cartSlice.actions;
