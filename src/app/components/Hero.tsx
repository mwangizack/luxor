"use client";
import { Box, Button, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

function Hero() {
  return (
    <section
      style={{
        position: "relative",
        height: "90.5vh",
        backgroundImage: "url('../../../hero-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Black overlay  */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          zIndex: 1,
        }}
      ></Box>

      {/* Headline */}
      <Typography
        variant="h1"
        sx={{
          color: "#FFF",
          fontSize: "4.5rem",
          fontWeight: "600",
          textAlign: "center",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
        }}
      >
        Own a Timepiece That Sets You Apart
      </Typography>

      {/* Description */}
      <Typography
        variant="h3"
        sx={{
          color: "rgb(255, 255, 255, 0.7)",
          fontSize: "1.4rem",
          fontWeight: "400",
          textAlign: "center",
          position: "absolute",
          top: "67%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
        }}
      >
        Discover our collection of meticulously crafted timepieces that combine
        precision, style and heritage, designed to make a statement wherever you
        go.
      </Typography>

      {/* Call to Action */}
      <Button
        variant="contained"
        href="#content-section"
        disableElevation
        sx={{
          position: "absolute",
          top: "77%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          fontSize: "1.2rem",
          fontWeight: "600",
          textTransform: "none",
          padding: "5px 70px",
        }}
      >
        Shop Now
      </Button>

      {/* Arrow Icon */}
      <ExpandMoreIcon
        fontSize="large"
        sx={{
          position: "absolute",
          top: "90%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          cursor: "pointer",
          color: "#FFF",
          animation: "moveUpAndDown 2s infinite",
        }}
      />
    </section>
  );
}

export default Hero;
