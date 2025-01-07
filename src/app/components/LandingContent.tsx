"use client";
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import SearchInput from "./SearchInput";
import FilterListIcon from "@mui/icons-material/FilterList";
import SortByInput from "./SortByInput";

function LandingContent() {
  const [showFilters, setShowFilters] = React.useState(false);

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
        sx={{ width: "100%", display: "flex", justifyContent: "space-between", marginTop: "20px" }}
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
    </section>
  );
}

export default LandingContent;
