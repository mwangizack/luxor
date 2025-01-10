"use client";
import React from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import SearchInput from "./SearchInput";
import FilterListIcon from "@mui/icons-material/FilterList";
import SortByInput from "./SortByInput";
import FiltersSelectBoxes from "./FiltersSelectBoxes";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import WatchCard from "./WatchCard";

function LandingContent() {
  const [showFilters, setShowFilters] = React.useState(false);
  const watches = useSelector(
    (state: RootState) => state.watchList.watchesToShow
  );
  const isXsAndBelow = useMediaQuery((theme) => theme.breakpoints.only("xs"));

  return (
    <Box
      id="content-section"
      sx={{ padding: { xs: "20px 30px", sm: "20px 65px", md: "20px 100px" } }}
    >
      {/* Title */}
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.5rem" },
          color: "secondary.main",
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        LUXOR WATCHES
      </Typography>

      {/* Inputs */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: { xs: "1rem", sm: "3rem", md: "3rem" },
            flexWrap: "wrap",
          }}
        >
          <SearchInput />
          <Button
            variant="outlined"
            startIcon={<FilterListIcon />}
            sx={{
              textTransform: "none",
              padding: "0.75rem 1rem",
              width: { xs: "8rem", sm: "8rem", md: "10rem" },
              height: "3rem",
            }}
            onClick={() => setShowFilters(!showFilters)}
          >
            Filter
          </Button>

          {/* Show the sort input here for extra small devices */}
          {isXsAndBelow && <SortByInput />}
        </Box>

        {/* Show the sort input here for larger devices */}
        {isXsAndBelow ? null : <SortByInput />}
      </Box>

      {/* Filters */}
      {showFilters && <FiltersSelectBoxes />}

      {/* Show count statement only if the filtered results are greater than zero */}
      {watches.length > 0 && (
        <Typography sx={{ marginTop: "20px" }}>
          Showing {watches.length} {watches.length === 1 ? "watch" : "watches"}
        </Typography>
      )}

      {/* Watch cards */}
      <Box
        sx={{
          marginTop: "20px",
          display: "flex",
          gap: { xs: "2.75rem", sm: "3.1rem", md: "2.75rem" },
          flexWrap: "wrap",
        }}
      >
        {watches.map((watch) => (
          <WatchCard
            key={watch.id}
            watch={watch}
          />
        ))}
      </Box>
    </Box>
  );
}

export default LandingContent;
