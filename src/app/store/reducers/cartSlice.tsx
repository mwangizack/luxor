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
    searchWatches: (state, action) => {
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
    filterWatchesByGender: (state, action) => {
      switch (action.payload) {
        case "male":
          state.watchesToShow = state.watchesToShow.filter(
            (watch) => watch.gender === "Men"
          );
          break;
        case "female":
          state.watchesToShow = state.watchesToShow.filter(
            (watch) => watch.gender === "Women"
          );
          break;
        case "unisex":
          state.watchesToShow = state.watchesToShow.filter(
            (watch) => watch.gender === "Unisex"
          );
          break;
        default:
          state.watchesToShow = state.watchesToShow.filter(
            (watch) => watch.gender !== ""
          );
          break;
      }
    },
    filterWatchesByDialSize: (state, action) => {
      switch (action.payload) {
        case "less than 36mm":
          state.watchesToShow = state.watchesToShow.filter(
            (watch) => watch.dial_size_mm < 36
          );
          break;
        case "36mm to 42mm":
          state.watchesToShow = state.watchesToShow.filter(
            (watch) => watch.dial_size_mm >= 36 && watch.dial_size_mm <= 42
          );
          break;
        case "greater than 42mm":
          state.watchesToShow = state.watchesToShow.filter(
            (watch) => watch.dial_size_mm > 42
          );
          break;
        default:
          state.watchesToShow = state.watchesToShow.filter(
            (watch) => watch.dial_size_mm > 0
          );
          break;
      }
    },
  },
});

export default cartSlice.reducer;
export const { searchWatches } = cartSlice.actions;
export const { sortWatches } = cartSlice.actions;
export const { filterWatchesByGender } = cartSlice.actions;
export const { filterWatchesByDialSize } = cartSlice.actions;
