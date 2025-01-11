"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../store/reducers/cartSlice";

function CartItem({ watch }) {
  const dispatch = useDispatch();

  function handleIncrementQuantity(watchId: number) {
    dispatch(incrementQuantity(watchId));
  }

  function handleDecrementQuantity(watchId: number) {
    dispatch(decrementQuantity(watchId));
  }

  return (
    <Box
      sx={{
        marginTop: "1rem",
        display: "flex",
        justifyContent: "space-between",
        paddingBottom: "1rem",
        borderBottom: "1px solid #d3d3d3",
      }}
    >
      {/* Watch image */}
      <Box
        sx={{
          width: "12rem",
          height: "15rem",
          backgroundImage: "url(), url('../../../picture-not-available.jpg')", // Add the watch image_url
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Box>

      {/* Watch details */}
      <Stack>
        <Typography sx={{ fontWeight: "700" }}>{watch.name}</Typography>
        <Typography sx={{ color: "#777777" }}>
          Material:{" "}
          {watch.material.charAt(0).toUpperCase() + watch.material.slice(1)}
        </Typography>
        <Typography sx={{ color: "#777777" }}>
          Gender: {watch.gender.charAt(0).toUpperCase() + watch.gender.slice(1)}
        </Typography>
        <Typography sx={{ color: "#777777" }}>
          Dial size: {watch.dial_size_mm}mm
        </Typography>
        <Typography sx={{ color: "#777777" }}>
          Bracelet:{" "}
          {watch.bracelet.charAt(0).toUpperCase() + watch.bracelet.slice(1)}
        </Typography>
      </Stack>

      {/* Price */}
      <Stack gap={1}>
        <Typography sx={{ fontWeight: "700" }}>Price</Typography>
        <Typography sx={{ fontWeight: "700" }}>
          KES {watch.price.toLocaleString()}
        </Typography>
      </Stack>

      {/* Quantity */}
      <Stack gap={1}>
        <Typography sx={{ fontWeight: "700" }}>Quantity</Typography>
        <Box
          sx={{
            display: "flex",
            gap: "0.7rem",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            disableElevation
            onClick={() => {
              handleDecrementQuantity(watch.id);
            }}
            disabled={watch.quantityInCart <= 1}
            sx={{ textTransform: "none", padding: "0.5rem 1rem" }}
          >
            <RemoveIcon />
          </Button>
          <Box
            sx={{
              border: "1px solid #d3d3d3",
              padding: "0.5rem 2rem",
              borderRadius: "4px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>{watch.quantityInCart}</Typography>
          </Box>
          <Button
            variant="contained"
            disableElevation
            onClick={() => {
              handleIncrementQuantity(watch.id);
            }}
            disabled={watch.stock_count === 0}
            sx={{ textTransform: "none", padding: "0.5rem 1rem" }}
          >
            <AddIcon />
          </Button>
        </Box>
      </Stack>

      {/* Total */}
      <Stack gap={1} sx={{ justifyContent: "space-between" }}>
        <Box>
          <Typography sx={{ fontWeight: "700" }}>Total</Typography>
          <Typography sx={{ fontWeight: "700", color: "#777777" }}>
            KES {(watch.price * watch.quantityInCart).toLocaleString()}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="outlined"
            onClick={() => dispatch(removeFromCart(watch.id))}
            sx={{
              color: "red",
              border: "1px solid red",
              textTransform: "none",
            }}
          >
            Remove
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}

export default CartItem;
