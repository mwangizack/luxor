"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Badge, Link, Stack } from "@mui/material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { Cinzel } from "next/font/google";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const cinzelFont = Cinzel({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal"],
});

function Navbar() {
  const cartItemsCount = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );
  const router = useRouter();

  return (
    <Stack direction="row" sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "secondary.main",
          padding: "0.6vh 7vw",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            "&.MuiToolbar-root": {
              padding: 0,
            },
          }}
        >
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
            onClick={() => router.push("/")}
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
            onClick={() => router.push("/cart")}
            aria-label="cart"
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
              <LocalMallOutlinedIcon fontSize="medium" />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Stack>
  );
}

export default Navbar;
