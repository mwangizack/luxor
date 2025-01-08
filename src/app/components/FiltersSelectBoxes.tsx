import { Box, Button, FormControl, MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, clearFilters } from "../store/reducers/cartSlice";
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import React from "react";
import { RootState } from "../store/store";

function FiltersSelectBoxes() {
  const dispatch = useDispatch();
  const gender = useSelector((state: RootState) => state.cart.filters.gender);
  const dialSize = useSelector(
    (state: RootState) => state.cart.filters.dialSize
  );
  const material = useSelector(
    (state: RootState) => state.cart.filters.material
  );
  const bracelet = useSelector(
    (state: RootState) => state.cart.filters.bracelet
  );

  function handleChangeGender(event: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(setFilter({ filterName: "gender", value: event.target.value }));
  }

  function handleChangeDialSize(event: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(setFilter({ filterName: "dialSize", value: event.target.value }));
  }

  function handleChangeMaterial(event: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(setFilter({ filterName: "material", value: event.target.value }));
  }

  function handleChangeBracelet(event: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(setFilter({ filterName: "bracelet", value: event.target.value }));
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

      {/* Materials */}
      <FormControl sx={{ width: "12rem" }}>
        <Select
          value={material}
          onChange={handleChangeMaterial}
          displayEmpty
          sx={{
            height: "3rem",
          }}
        >
          <MenuItem value="">
            <em>All materials</em>
          </MenuItem>
          <MenuItem value="rose gold">Rose Gold</MenuItem>
          <MenuItem value="yellow gold">Yellow Gold</MenuItem>
          <MenuItem value="titanium">Titanium</MenuItem>
          <MenuItem value="stainless steel">Stainless Steel</MenuItem>
          <MenuItem value="gold-plated">Gold-plated</MenuItem>
          <MenuItem value="silver-plated">Silver-plated</MenuItem>
          <MenuItem value="black ceramic">Black ceramic</MenuItem>
        </Select>
      </FormControl>

      {/* Bracelets */}
      <FormControl sx={{ width: "12rem" }}>
        <Select
          value={bracelet}
          onChange={handleChangeBracelet}
          displayEmpty
          sx={{
            height: "3rem",
          }}
        >
          <MenuItem value="">
            <em>All bracelets</em>
          </MenuItem>
          <MenuItem value="rose gold">Rose Gold</MenuItem>
          <MenuItem value="yellow gold">Yellow Gold</MenuItem>
          <MenuItem value="leather">Leather</MenuItem>
          <MenuItem value="mesh">Mesh</MenuItem>
          <MenuItem value="stainless steel">Stainless Steel</MenuItem>
          <MenuItem value="gold-plated">Gold-plated</MenuItem>
          <MenuItem value="silicone">Silicone</MenuItem>
          <MenuItem value="rubber">Rubber</MenuItem>
        </Select>
      </FormControl>

      {/* Clear filters button */}
      <Button
        variant="contained"
        disableElevation
        startIcon={<FilterAltOffIcon />}
        sx={{
          textTransform: "none",
          padding: "0.75rem 1rem",
          width: "10rem",
          height: "3rem",
        }}
        onClick={() => dispatch(clearFilters())}
      >
        Clear all
      </Button>
    </Box>
  );
}

export default FiltersSelectBoxes;
