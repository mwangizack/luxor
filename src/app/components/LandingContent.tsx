"use client";
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import SearchInput from "./SearchInput";
import FilterListIcon from "@mui/icons-material/FilterList";
import SortByInput from "./SortByInput";
import FiltersSelectBoxes from "./FiltersSelectBoxes";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import WatchCard from "./WatchCard";

function LandingContent() {
  const [showFilters, setShowFilters] = React.useState(false);
  const watches = useSelector((state: RootState) => state.cart.watchesToShow);

  return (
    <section id="content-section" style={{ padding: "20px 100px" }}>
      {/* Title */}
      <Typography
        variant="h2"
        sx={{
          fontSize: "1.5rem",
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
            gap: "3rem",
          }}
        >
          <SearchInput />
          <Button
            variant="outlined"
            startIcon={<FilterListIcon />}
            sx={{
              textTransform: "none",
              padding: "0.75rem 1rem",
              width: "10rem",
              height: "3rem",
            }}
            onClick={() => setShowFilters(!showFilters)}
          >
            Filter
          </Button>
        </Box>
        <SortByInput />
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
          gap: "2.75rem",
          flexWrap: "wrap",
        }}
      >
        {watches.map((watch) => (
          <WatchCard
            key={watch.id}
            name={watch.name}
            dialSize={watch.dial_size_mm}
            material={watch.material}
            gender={watch.gender}
            price={watch.price}
            stock_count={watch.stock_count}
            image_url={watch.image_url}
          />
        ))}
      </Box>
    </section>
  );
}

export default LandingContent;
