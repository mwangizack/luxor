import React from "react";
import Paper from "@mui/material/Paper";
import { Box, Button, Stack, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
} from "../store/reducers/cartSlice";
import { RootState } from "../store/store";

function WatchCard({ watch }) {
  const dispatch = useDispatch();
  const watchesInCart = useSelector((state: RootState) => state.cart.items);

  function handleAddToCart(watchId: number) {
    dispatch(addToCart(watchId));
  }

  function handleIncrementQuantity(watchId: number) {
    dispatch(incrementQuantity(watchId));
  }

  function handleDecrementQuantity(watchId: number) {
    dispatch(decrementQuantity(watchId));
  }

  return (
    <Paper
      elevation={3}
      sx={{ width: { xs: "22rem", sm: "22rem", md: "24rem" }, height: "26rem" }}
    >
      {/* Watch image with fallback */}
      <Box
        sx={{
          width: "100%",
          height: "14rem",
          borderBottom: "1px solid #d3d3d3",
          backgroundImage: `url(${watch.image_url}), url(../../../picture-not-available.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Show the out of stock label when the stock count is 0 */}
        {!watch.stock_count && (
          <Box
            sx={{
              width: "7rem",
              height: "2rem",
              backgroundColor: "red",
              padding: "0.5rem 0.8rem",
              color: "#FFF",
              borderTopRightRadius: "4px",
              textAlign: "center",
              float: "right",
            }}
          >
            Out of stock
          </Box>
        )}
      </Box>

      {/* Watch details */}
      <Stack sx={{ alignItems: "center", padding: "1rem 3rem" }}>
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: "1.2rem",
            color: "secondary.main",
          }}
        >
          {watch.name}
        </Typography>
        <Typography sx={{ color: "#777777" }}>
          {watch.dial_size_mm}mm,{" "}
          {watch.material.charAt(0).toUpperCase() + watch.material.slice(1)},{" "}
          {watch.gender.charAt(0).toUpperCase() + watch.gender.slice(1)}
        </Typography>
        <Typography sx={{ fontWeight: "700" }}>
          KES {watch.price.toLocaleString()}
        </Typography>

        {/* If watch in cart show 'Add & reduce quantity' buttons else show 'Add to cart' button */}
        {watchesInCart[watch.id] ? (
          <Box
            sx={{
              display: "flex",
              gap: "0.7rem",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <Button
              variant="contained"
              disableElevation
              onClick={() => {
                handleDecrementQuantity(watch.id);
              }}
              disabled={watchesInCart[watch.id].quantityInCart <= 1}
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
              <Typography>{watchesInCart[watch.id].quantityInCart}</Typography>{" "}
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
        ) : (
          <Button
            variant="contained"
            disableElevation
            onClick={() => handleAddToCart(watch.id)}
            disabled={!watch.stock_count}
            sx={{
              textTransform: "none",
              padding: "0.5rem 2rem",
              marginTop: "1rem",
            }}
          >
            Add to cart
          </Button>
        )}
      </Stack>
    </Paper>
  );
}

export default WatchCard;
