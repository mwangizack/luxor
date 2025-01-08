import { Box, Typography } from "@mui/material";
import React from "react";
import { Cinzel } from "next/font/google";

const cinzelFont = Cinzel({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal"],
});

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
        width: "100%",
        height: "5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        marginTop: "20px",
      }}
    >
      <Typography
        sx={{
          color: "#FFF",
        }}
      >
        &copy; 2025{" "}
        <span
          style={{
            fontFamily: cinzelFont.className,
            fontWeight: "600",
            color: "primary.main",
          }}
        >
          Luxor
        </span>
        . All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
