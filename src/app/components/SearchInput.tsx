import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import { watches } from "../data/watches";

function SearchInput() {
  const [searchValue, setSearchValue] = React.useState("");

  // Use Redux to manage the search state
  function handleSearch(value: string | null) {
    if (value) {
      const filteredWatches = watches.filter((watch) =>
        watch.name.toLowerCase().includes(value.toLowerCase())
      );
    }
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
        marginTop: "20px",
        width: "20rem",
      }}
    />
  );
}

export default SearchInput;
