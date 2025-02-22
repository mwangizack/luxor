import { Button, FormControl, MenuItem, Select, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, clearFilters } from "../store/reducers/watchListSlice";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import React from "react";
import { RootState } from "../store/store";

function FiltersSelectBoxes() {
  const dispatch = useDispatch();
  const gender = useSelector(
    (state: RootState) => state.watchList.filters.gender
  );
  const dialSize = useSelector(
    (state: RootState) => state.watchList.filters.dialSize
  );
  const material = useSelector(
    (state: RootState) => state.watchList.filters.material
  );
  const bracelet = useSelector(
    (state: RootState) => state.watchList.filters.bracelet
  );

  return (
    <Stack
      direction="row"
      marginTop="2.4vh"
      flexWrap="wrap"
      sx={{
        gap: { xs: "3vw", sm: "1.1vw", md: "1.1vw" },
        justifyContent: {
          xs: "space-between",
          sm: "space-between",
          md: "normal",
        },
      }}
    >
      {/* Gender */}
      <FormControl sx={{ width: { xs: "40vw", sm: "16vw", md: "13.3vw" } }}>
        <Select
          value={gender}
          onChange={(event) =>
            dispatch(
              setFilter({ filterName: "gender", value: event.target.value })
            )
          }
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
      <FormControl sx={{ width: { xs: "40vw", sm: "16vw", md: "13.3vw" } }}>
        <Select
          value={dialSize}
          onChange={(event) =>
            dispatch(
              setFilter({ filterName: "dialSize", value: event.target.value })
            )
          }
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
      <FormControl sx={{ width: { xs: "40vw", sm: "16vw", md: "13.3vw" } }}>
        <Select
          value={material}
          onChange={(event) =>
            dispatch(
              setFilter({ filterName: "material", value: event.target.value })
            )
          }
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
      <FormControl sx={{ width: { xs: "40vw", sm: "16vw", md: "13.3vw" } }}>
        <Select
          value={bracelet}
          onChange={(event) =>
            dispatch(
              setFilter({ filterName: "bracelet", value: event.target.value })
            )
          }
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
          padding: "1.4vh 1.1vw",
          width: { xs: "40vw", sm: "16vw", md: "13.3vw" },
          height: "3rem",
        }}
        onClick={() => dispatch(clearFilters())}
      >
        Clear all
      </Button>
    </Stack>
  );
}

export default FiltersSelectBoxes;
