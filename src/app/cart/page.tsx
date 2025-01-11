"use client";
import { Box, Button, Link, Stack, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import React from "react";
import { useRouter } from "next/navigation";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import EmptyCart from "../components/EmptyCart";

function page() {
  const router = useRouter();
  const watchesInCart = useSelector((state: RootState) => state.cart.items);
  const cartTotal = useSelector((state: RootState) => state.cart.totalPrice);

  return (
    <Stack>
      {/* Back text button */}
      <Box sx={{ display: "flex", alignItems: "center", gap: "0.2rem" }}>
        <KeyboardBackspaceIcon fontSize="small" color="primary" />
        <Link
          variant="button"
          sx={{
            textTransform: "none",
            fontSize: { xs: "0.8rem", sm: "1rem", md: "1rem" },
            "&:hover": { cursor: "pointer" },
          }}
          onClick={() => router.push("/#content-section")}
        >
          Continue shopping
        </Link>
      </Box>

      {/* Cart title */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          variant="h1"
          sx={{
            marginTop: "1rem",
            fontSize: {
              xs: "1.7rem",
              sm: "1.9rem",
              md: "2rem",
              color: "secondary.main",
            },
          }}
        >
          My Cart
        </Typography>
      </Box>

      {/* If cart is empty, show EmptyCart component, else show cart items */}
      {Object.keys(watchesInCart).length === 0 ? (
        <EmptyCart />
      ) : (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            marginTop: "20px",
            gap: "2rem",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {/* Cart items */}
          <Stack sx={{ width: "65%", borderTop: "1px solid #d3d3d3" }}>
            {Object.values(watchesInCart).map((watch) => {
              return <CartItem key={watch.id} watch={watch} />;
            })}

            {/* Cart Total */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "1.5rem",
                marginTop: "20px",
                paddingBottom: "20px",
                borderBottom: "1px solid #d3d3d3",
              }}
            >
              <Typography sx={{ fontWeight: 700, fontSize: "1.2rem" }}>
                Cart Total:
              </Typography>
              <Typography sx={{ fontWeight: 700, fontSize: "1.2rem" }}>
                KES {cartTotal.toLocaleString()}
              </Typography>
            </Box>
          </Stack>

          {/* Order Summary */}
          <Stack sx={{ borderTop: "1px solid black", width: "30%" }}></Stack>
        </Box>
      )}
    </Stack>
  );
}

export default page;
