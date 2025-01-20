import React from "react";
import {
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { sortWatches } from "../store/reducers/watchListSlice";

function SortByInput() {
  const dispatch = useDispatch();

  return (
    <Stack
      direction="row"
      sx={{ gap: { xs: "0.4rem", sm: "1rem", md: "1rem" } }}
    >
      <FormHelperText
        sx={{
          alignSelf: "flex-end",
          fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.2rem" },
          color: "black",
        }}
      >
        Sort by:
      </FormHelperText>
      <FormControl sx={{ width: { xs: "8.3rem", sm: "10rem", md: "12rem" } }}>
        <Select
          id="sort-by"
          defaultValue=""
          onChange={(event) => dispatch(sortWatches(event.target.value))}
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
    </Stack>
  );
}

export default SortByInput;
