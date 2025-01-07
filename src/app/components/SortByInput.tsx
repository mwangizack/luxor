import React from "react";
import {
  Box,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { sortWatches } from "../store/reducers/cartSlice";

function SortByInput() {
  const [sortBy, setSortBy] = React.useState("");
  const dispatch = useDispatch();

  function handleChangeSortBy(event: React.ChangeEvent<HTMLSelectElement>) {
    setSortBy(event.target.value);
    dispatch(sortWatches(sortBy));
  }

  return (
    <Box sx={{ display: "flex", gap: "1rem" }}>
      <FormHelperText
        sx={{ alignSelf: "flex-end", fontSize: "1.2rem", color: "black" }}
      >
        Sort by:
      </FormHelperText>
      <FormControl sx={{ width: "12rem" }}>
        <Select
          id="sort-by"
          value={sortBy}
          onChange={handleChangeSortBy}
          displayEmpty
          sx={{
            height: "3rem",
          }}
        >
          <MenuItem value="">
            <em>Featured</em>
          </MenuItem>
          <MenuItem value="price descending">Price high to low</MenuItem>
          <MenuItem value="price ascending">Price low to high</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default SortByInput;
