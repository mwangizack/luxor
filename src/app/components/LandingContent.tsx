"use client";
import React from "react";
import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import SearchInput from "./SearchInput";
import FilterListIcon from "@mui/icons-material/FilterList";
import SortByInput from "./SortByInput";
import FiltersSelectBoxes from "./FiltersSelectBoxes";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import WatchCard from "./WatchCard";
import { setWatches } from "../store/reducers/watchListSlice";
import Skeleton from "@mui/material/Skeleton";

const axios = require("axios");

function LandingContent() {
  const dispatch = useDispatch();
  const [showFilters, setShowFilters] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const watches = useSelector(
    (state: RootState) => state.watchList.watchesToShow
  );
  const isXsAndBelow = useMediaQuery((theme) => theme.breakpoints.only("xs"));

  React.useEffect(() => {
    const fetchWatches = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://my.api.mockaroo.com/api/watches?key=7d77e430"
        );
        dispatch(setWatches(response.data));
      } catch (err) {
        console.error(`Error fetching watches: ${err} `);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWatches();
  }, []);

  return (
    <Box
      id="content-section"
      sx={{ padding: { xs: "20px 30px", sm: "20px 65px", md: "20px 100px" } }}
    >
      {/* Title */}
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.5rem" },
          color: "secondary.main",
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        LUXOR WATCHES
      </Typography>

      {/* Inputs */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: { xs: "1rem", sm: "3rem", md: "3rem" },
            flexWrap: "wrap",
          }}
        >
          <SearchInput />
          <Button
            variant="outlined"
            startIcon={<FilterListIcon />}
            sx={{
              textTransform: "none",
              padding: "0.75rem 1rem",
              width: { xs: "8rem", sm: "8rem", md: "10rem" },
              height: "3rem",
            }}
            onClick={() => setShowFilters(!showFilters)}
          >
            Filter
          </Button>

          {/* Show the sort input here for extra small devices */}
          {isXsAndBelow && <SortByInput />}
        </Box>

        {/* Show the sort input here for larger devices */}
        {isXsAndBelow ? null : <SortByInput />}
      </Box>

      {/* Filters */}
      {showFilters && <FiltersSelectBoxes />}

      {/* Show count statement only if the filtered results are greater than zero */}
      {watches.length > 0 && (
        <Typography sx={{ marginTop: "20px" }}>
          Showing {watches.length} {watches.length === 1 ? "watch" : "watches"}
        </Typography>
      )}

      {/* Watch cards */}
      <Box
        sx={{
          marginTop: "20px",
          display: "flex",
          gap: { xs: "2.75rem", sm: "3.1rem", md: "2.75rem" },
          flexWrap: "wrap",
        }}
      >
        {isLoading
          ? // Show skeletons if still loading
            [...Array(6)].map((_, index) => (
              <Stack
                key={index}
                gap="1rem"
                sx={{
                  width: { xs: "22rem", sm: "22rem", md: "24rem" },
                  height: "26rem",
                  border: "1px solid #d3d3d3",
                  borderRadius: "4px",
                  marginTop: "20px",
                }}
              >
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width="100%"
                  height="52%"
                />
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  sx={{ pl: "3rem", pr: "3rem" }}
                >
                  <Skeleton
                    animation="wave"
                    variant="text"
                    sx={{ fontSize: "2rem", width: "60%" }}
                  />
                  <Skeleton
                    animation="wave"
                    variant="text"
                    sx={{ fontSize: "1.8rem", width: "90%" }}
                  />
                  <Skeleton
                    animation="wave"
                    variant="text"
                    sx={{ fontSize: "1.8rem", width: "50%" }}
                  />
                  <Skeleton
                    animation="wave"
                    variant="rectangular"
                    width="60%"
                    height="2.5rem"
                    sx={{ mt: "1.3rem", borderRadius: "4px" }}
                  />
                </Stack>
              </Stack>
            ))
          : watches.map((watch) => <WatchCard key={watch.id} watch={watch} />)}
      </Box>
    </Box>
  );
}

export default LandingContent;
