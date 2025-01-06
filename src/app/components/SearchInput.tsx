import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { watches } from "../data/watches";
import { useDispatch } from "react-redux";
import { filterWatches } from "../store/reducers/cartSlice";

function SearchInput() {
  const [searchValue, setSearchValue] = React.useState("");
  const dispatch = useDispatch();

  function handleSearch(value: string | null) {
    dispatch(filterWatches(value));
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
          width: "20rem",
          height: "3rem",
        },
      }}
    />
  );
}

export default SearchInput;
