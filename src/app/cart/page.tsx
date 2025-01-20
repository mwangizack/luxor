"use client";
import { Button, Link, Stack, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import React from "react";
import { useRouter } from "next/navigation";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import EmptyCart from "../components/EmptyCart";
import EastIcon from "@mui/icons-material/East";

function Page() {
  const router = useRouter();
  const watchesInCart = useSelector((state: RootState) => state.cart.items);
  const cartTotal = useSelector((state: RootState) => state.cart.totalPrice);

  return (
    <Stack>
      {/* Back text button */}
      <Stack direction="row" alignItems="center" gap="1vw">
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
      </Stack>

      {/* Cart title */}
      <Stack direction="row" justifyContent="center">
        <Typography
          variant="h1"
          sx={{
            marginTop: "2vh",
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
      </Stack>

      {/* If cart is empty, show EmptyCart component, else show cart items */}
      {Object.keys(watchesInCart).length === 0 ? (
        <EmptyCart />
      ) : (
        <Stack
          direction="row"
          marginTop="2vh"
          gap="4vw"
          justifyContent="space-between"
          width="100%"
          flexWrap="wrap"
        >
          {/* Cart items */}
          <Stack
            sx={{
              width: { xs: "100%", sm: "100%", md: "65%" },
              borderTop: "1px solid #d3d3d3",
            }}
          >
            {Object.values(watchesInCart).map((watch) => {
              return <CartItem key={watch.id} watch={watch} />;
            })}

            {/* Cart Total */}
            <Stack
              direction="row"
              justifyContent="flex-end"
              gap="3vw"
              marginTop="2vh"
              paddingBottom="2vh"
              borderBottom="1px solid #d3d3d3"
            >
              <Typography sx={{ fontWeight: 700, fontSize: "1.2rem" }}>
                Cart Total:
              </Typography>
              <Typography sx={{ fontWeight: 700, fontSize: "1.2rem" }}>
                KES {cartTotal.toLocaleString()}
              </Typography>
            </Stack>
          </Stack>

          {/* Order Summary */}
          <Stack
            sx={{
              backgroundColor: "#d3d3d3",
              width: { xs: "100%", sm: "100%", md: "30%" },
              padding: "2vh 2vw",
              gap: "1rem",
              borderRadius: "0.25rem",
              height: "max-content",
            }}
          >
            <Typography
              sx={{
                fontWeight: "700",
                mb: "1rem",
                fontSize: "1.5rem",
                textAlign: "center",
              }}
            >
              ORDER SUMMARY
            </Typography>
            <Stack direction="row" justifyContent="space-between">
              <Typography>Cart total</Typography>
              <Typography>KES {cartTotal.toLocaleString()}</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography>Shipping cost</Typography>
              <Typography>TBD</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography>Discount</Typography>
              <Typography>-KES 0</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography>Tax</Typography>
              <Typography>TBD</Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              borderTop="1px solid #777777"
              paddingTop="2vh"
            >
              <Typography sx={{ fontSize: "1.5rem", fontWeight: "600" }}>
                Grand Total
              </Typography>
              <Typography sx={{ fontSize: "1.5rem", fontWeight: "600" }}>
                KES {cartTotal.toLocaleString()}
              </Typography>
            </Stack>
            <Stack direction="row" justifyContent="center">
              <Button
                variant="contained"
                disableElevation
                endIcon={<EastIcon />}
                color="primary"
                sx={{
                  textTransform: "none",
                  width: "100%",
                  fontWeight: "700",
                  letterSpacing: "0.06rem",
                }}
              >
                Checkout
              </Button>
            </Stack>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
}

export default Page;
