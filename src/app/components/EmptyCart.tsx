"use client";
import { Button, Stack, Typography } from "@mui/material";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import React from "react";
import { useRouter } from "next/navigation";

function EmptyCart() {
  const router = useRouter();

  return (
    <Stack
      gap={1}
      justifyContent="center"
      alignItems="center"
      marginTop="7rem"
      fontSize="8rem"
    >
      <ProductionQuantityLimitsIcon fontSize="inherit" color="error" />
      <Typography variant="h1" sx={{ fontSize: "2rem" }}>
        Oops! Your cart is empty...
      </Typography>
      <Button
        variant="contained"
        disableElevation
        sx={{ fontWeight: "700", padding: "0.5rem 2rem" }}
        onClick={() => router.push("/#content-section")}
      >
        Start Shopping
      </Button>
    </Stack>
  );
}

export default EmptyCart;
