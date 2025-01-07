import { Box, FormControl, MenuItem, Select } from "@mui/material";
import { useDispatch } from "react-redux";
import { filterWatchesByGender } from "../store/reducers/cartSlice";
import { filterWatchesByDialSize } from "../store/reducers/cartSlice";
import React from "react";

function FiltersSelectBoxes() {
  const [gender, setGender] = React.useState("");
  const [dialSize, setDialSize] = React.useState("");
  const dispatch = useDispatch();

  function handleChangeGender(event: React.ChangeEvent<HTMLSelectElement>) {
    setGender(event.target.value);
    dispatch(filterWatchesByGender(gender));
  }

  function handleChangeDialSize(event: React.ChangeEvent<HTMLSelectElement>) {
    setDialSize(event.target.value);
    dispatch(filterWatchesByDialSize(dialSize));
  }

  return (
    <Box sx={{ marginTop: "20px", display: "flex", gap: "1rem" }}>
      {/* Gender */}
      <FormControl sx={{ width: "12rem" }}>
        <Select
          value={gender}
          onChange={handleChangeGender}
          displayEmpty
          sx={{
            height: "3rem",
          }}
        >
          <MenuItem value="">
            <em>All genders</em>
          </MenuItem>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="unisex">Unisex</MenuItem>
        </Select>
      </FormControl>

      {/* Dial size */}
      <FormControl sx={{ width: "12rem" }}>
        <Select
          value={dialSize}
          onChange={handleChangeDialSize}
          displayEmpty
          sx={{
            height: "3rem",
          }}
        >
          <MenuItem value="">
            <em>All dials</em>
          </MenuItem>
          <MenuItem value="less than 36mm">Less than 36mm</MenuItem>
          <MenuItem value="36mm to 42mm">36mm to 42mm</MenuItem>
          <MenuItem value="greater than 42mm">Greater than 42mm</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default FiltersSelectBoxes;
