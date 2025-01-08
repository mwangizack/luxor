"use client";
import { createSlice } from "@reduxjs/toolkit";
import { watches } from "@/app/data/watches";
import { Watch } from "@/app/data/watches";

interface CartState {
  watchesToShow: Watch[];
  filters: {
    gender: string;
    dialSize: string;
    material: string;
    bracelet: string;
  };
}

const initialState: CartState = {
  watchesToShow: watches,
  filters: {
    gender: "",
    dialSize: "",
    material: "",
    bracelet: "",
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    searchWatches: (state, action) => {
      if (!action.payload) {
        state.watchesToShow = watches;
      } else {
        state.watchesToShow = watches.filter((watch) =>
          watch.name.toLowerCase().includes(action.payload.toLowerCase())
        );
      }
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
    setFilter: (state, action) => {
      const { filterName, value } = action.payload;
      state.filters[filterName] = value;
      state.watchesToShow = applyFilters(watches, state.filters);
    },
    clearFilters: (state) => {
      state.filters = {
        gender: "",
        dialSize: "",
        material: "",
        bracelet: "",
      };
      state.watchesToShow = watches;
    },
  },
});

function applyFilters(data: Watch[], filters: CartState["filters"]): Watch[] {
  return data.filter((watch) => {
    return (
      (!filters.gender || watch.gender === filters.gender) &&
      (!filters.dialSize ||
        (filters.dialSize === "less than 36mm" && watch.dial_size_mm < 36) ||
        (filters.dialSize === "36mm to 42mm" &&
          watch.dial_size_mm >= 36 &&
          watch.dial_size_mm <= 42) ||
        (filters.dialSize === "greater than 42mm" &&
          watch.dial_size_mm > 42)) &&
      (!filters.material || watch.material === filters.material) &&
      (!filters.bracelet || watch.bracelet === filters.bracelet)
    );
  });
}

export default cartSlice.reducer;
export const { searchWatches, sortWatches, setFilter, clearFilters } =
  cartSlice.actions;
