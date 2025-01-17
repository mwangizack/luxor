import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { watches } from "../data/watches";
import { useDispatch } from "react-redux";
import { searchWatches } from "../store/reducers/watchListSlice";

function SearchInput() {
  const [searchValue, setSearchValue] = React.useState("");
  const dispatch = useDispatch();

  function handleSearch(value: string | null) {
    dispatch(searchWatches(value));
  }

  return (
    <Autocomplete
      id="search-watches"
      freeSolo
      options={
        searchValue.length >= 1 ? watches.map((watch) => watch.name) : []
      }
      inputValue={searchValue}
      onInputChange={(event, newValue) => {
        setSearchValue(newValue);
      }}
      onChange={(event, value: string | null) => {
        handleSearch(value);
      }}
      renderInput={(params) => (
        <TextField {...params} label="Search for watches" />
      )}
      sx={{
        "& .MuiAutocomplete-inputRoot": {
          width: { xs: "86vw", sm: "29vw", md: "22vw" },
          height: "3rem",
        },
      }}
    />
  );
}

export default SearchInput;
