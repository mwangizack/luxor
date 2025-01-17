"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

function Hero() {
  return (
    <section
      style={{
        height: "90.5vh",
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('../../../hero-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        padding: "12.3vh 0",
      }}
    >
      <Stack
        alignItems="center"
        sx={{
          width: "70vw",
          marginTop: { xs: "10vh", sm: "22vh", md: "25vh" },
        }}
      >
        {/* Headline */}
        <Typography
          variant="h1"
          sx={{
            color: "#FFF",
            fontSize: { xs: "2.7rem", sm: "3.2rem", md: "3.85rem" },
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Own a Timepiece That Sets You Apart
        </Typography>

        {/* Description */}
        <Typography
          variant="h3"
          sx={{
            marginTop: "0.9vh",
            color: "rgb(255, 255, 255, 0.7)",
            fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" },
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          Discover our unique collection of meticulously crafted timepieces that
          combine precision, style and heritage, designed to make a statement
          wherever you go.
        </Typography>

        {/* Call to Action */}
        <Button
          variant="contained"
          href="#content-section"
          disableElevation
          sx={{
            marginTop: "3.9vh",
            fontSize: "1.2rem",
            fontWeight: "600",
            textTransform: "none",
            padding: "0.6vh 4.8vw",
            width: "max-content",
            textAlign: "center",
          }}
        >
          Shop Now
        </Button>

        {/* Arrow Icon */}
        <ExpandMoreIcon
          fontSize="large"
          sx={{
            display: {
              xs: "none",
              sm: "initial",
              md: "initial",
            },
            marginTop: "13.8vh",
            cursor: "pointer",
            color: "#FFF",
            animation: "moveUpAndDown 2s infinite",
          }}
        />
      </Stack>
    </section>
  );
}

export default Hero;
