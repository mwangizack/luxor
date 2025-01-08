import React from "react";
import Paper from "@mui/material/Paper";
import { Box, Button, Stack, Typography } from "@mui/material";

function WatchCard({
  name,
  dialSize,
  material,
  gender,
  price,
  stock_count,
  image_url,
}) {
  return (
    <Paper elevation={3} sx={{ minWidth: "24rem", height: "26rem" }}>
      {/* Watch image with fallback */}
      <Box
        sx={{
          width: "100%",
          height: "14rem",
          borderBottom: "1px solid #d3d3d3",
          backgroundImage: `url(${image_url}), url(../../../picture-not-available.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Show the out of stock label when the stock count is 0 */}
        {!stock_count && (
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
          {name}
        </Typography>
        <Typography sx={{ color: "#777777" }}>
          {dialSize}mm, {material.charAt(0).toUpperCase() + material.slice(1)},{" "}
          {gender.charAt(0).toUpperCase() + gender.slice(1)}
        </Typography>
        <Typography sx={{ fontWeight: "700" }}>
          KES {price.toLocaleString()}
        </Typography>

        {/* Add to cart button */}
        <Button
          variant="contained"
          disabled={!stock_count}
          sx={{
            textTransform: "none",
            padding: "0.5rem 2rem",
            marginTop: "1rem",
          }}
        >
          Add to cart
        </Button>
      </Stack>
    </Paper>
  );
}

export default WatchCard;
