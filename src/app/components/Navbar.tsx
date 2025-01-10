"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Badge, Link } from "@mui/material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { Cinzel } from "next/font/google";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";

const cinzelFont = Cinzel({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal"],
});

function Navbar() {
  const cartItemsCount = useSelector((state: RootState) => state.cart.totalQuantity);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "secondary.main",
          padding: { xs: "5px 30px", sm: "5px 65px", md: "5px 100px" },
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Luxor Logo */}
          <Link
            variant="button"
            underline="none"
            sx={{
              fontFamily: cinzelFont.className,
              fontWeight: "600",
              fontSize: { xs: "1.7rem", sm: "1.9rem", md: "2rem" },
              color: "primary",
              textTransform: "none",
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onClick={() => {}} // Add link to homepage
          >
            Luxor
          </Link>

          {/* Cart Icon */}
          <IconButton
            size="large"
            sx={{
              fontSize: {
                xs: "medium",
                sm: "medium",
                md: "large",
              },
            }}
            aria-label="notifications"
            color="inherit"
          >
            <Badge
              badgeContent={cartItemsCount}
              color="error"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              <LocalMallOutlinedIcon
                fontSize="medium"
              />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
