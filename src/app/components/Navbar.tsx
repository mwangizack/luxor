"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Badge, Link } from "@mui/material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { Cinzel } from "next/font/google";

const cinzelFont = Cinzel({
  subsets: ["latin"],
  weight: [ "600", "700"],
  style: ["normal"],
});

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#0b3e27", padding: "5px 100px" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Luxor Logo */}
          <Link
            variant="button"
            underline="none"
            sx={{
              fontFamily: cinzelFont.className,
              fontWeight: "600",
              fontSize: "2rem",
              color: "rgb(163, 126, 44)",
              textTransform: "none",
              "&:hover": {
                cursor: "pointer",
              }
            }}
            onClick={() => {}}  // Add link to homepage
          >
            Luxor
          </Link>

          {/* Cart Icon */}
          <IconButton size="large" aria-label="notifications" color="inherit">
            <Badge
              badgeContent={1} //Make it dynamic
              color="error"
              sx={{
                "& .MuiBadge-badge": {
                  right: 1,
                  top: 28,
                },
              }}
            >
              <LocalMallOutlinedIcon fontSize="large" />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
