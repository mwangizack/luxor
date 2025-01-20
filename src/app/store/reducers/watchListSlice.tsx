"use client";
import { createSlice } from "@reduxjs/toolkit";
import { Watch } from "@/app/data/watches";

interface WatchListState {
  watchesToShow: Watch[];
  watches: Watch[];
  filters: {
    gender: string;
    dialSize: string;
    material: string;
    bracelet: string;
  };
}

const initialState: WatchListState = {
  watchesToShow: [],
  watches: [],
  filters: {
    gender: "",
    dialSize: "",
    material: "",
    bracelet: "",
  },
};

const watchListSlice = createSlice({
  name: "watchList",
  initialState,
  reducers: {
    searchWatches: (state, action) => {
      if (!action.payload) {
        state.watchesToShow = state.watches;
      } else {
        state.watchesToShow = state.watches.filter((watch) =>
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
      type FilterName = keyof typeof state.filters;
      const { filterName, value }: { filterName: FilterName; value: string } =
        action.payload;
      state.filters[filterName] = value;
      state.watchesToShow = applyFilters(state.watches, state.filters);
    },
    clearFilters: (state) => {
      state.filters = {
        gender: "",
        dialSize: "",
        material: "",
        bracelet: "",
      };
      state.watchesToShow = state.watches;
    },
    setWatches: (state, action) => {
      state.watches = action.payload;
      state.watchesToShow = action.payload;
    },
  },
});

function applyFilters(
  data: Watch[],
  filters: WatchListState["filters"]
): Watch[] {
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

export default watchListSlice.reducer;
export const {
  searchWatches,
  sortWatches,
  setFilter,
  clearFilters,
  setWatches,
} = watchListSlice.actions;
