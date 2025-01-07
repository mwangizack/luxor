import React from "react";
import {
  Box,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

function SortByInput() {
  const [sortBy, setSortBy] = React.useState("");
  const watches = useSelector((state: RootState) => state.cart.watchesToShow);

  function handleChangeSortBy(event: React.ChangeEvent<HTMLSelectElement>) {
    setSortBy(event.target.value);
    // Handle sorting watches based on selected option
    switch (sortBy) {
        case "price descending":
          watches.sort((a, b) => b.price - a.price);
          break;
        case "price ascending":
          watches.sort((a, b) => a.price - b.price);
          break;
        default:
          watches.sort((a, b) => a.id - b.id);
          break;
    }
  }

  return (
    <Box sx={{ display: "flex", gap: "1rem" }}>
      <FormHelperText sx={{ alignSelf: "flex-end", fontSize: "1.2rem", color: "black" }}>Sort by:</FormHelperText>
      <FormControl sx={{ width: "12rem"}}>
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
