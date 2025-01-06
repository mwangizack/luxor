"use client";
import { Typography } from "@mui/material";
import React from "react";
import SearchInput from "./SearchInput";

function LandingContent() {
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
      <SearchInput />
    </section>
  );
}

export default LandingContent;
