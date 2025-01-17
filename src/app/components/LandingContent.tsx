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
import Pagination from "@mui/material/Pagination";

const axios = require("axios");

function LandingContent() {
  const dispatch = useDispatch();
  const [showFilters, setShowFilters] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const watches = useSelector(
    (state: RootState) => state.watchList.watchesToShow
  );
  const isXsAndBelow = useMediaQuery((theme) => theme.breakpoints.only("xs"));

  const fetchWatches = async (offset: number = 0, limit: number = 4) => {
    setIsLoading(true);
    dispatch(setWatches([]));
    try {
      const response = await axios.get(
        `https://my.api.mockaroo.com/api/watches?key=7d77e430&offset=${offset}&limit=${limit}`
      );
      dispatch(setWatches(response.data));
    } catch (err) {
      console.error(`Error fetching watches: ${err} `);
    } finally {
      setIsLoading(false);
    }
  };

  function handleChangePage(event: React.ChangeEvent<unknown>, value: number) {
    setPage(value);
    const offset = value * 4 - 4;
    fetchWatches(offset);
  }

  React.useEffect(() => {
    fetchWatches();
  }, []);

  return (
    <Box id="content-section" sx={{ padding: "2.4vh 7vw" }}>
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
          marginTop: "2.4vh",
          flexWrap: "wrap",
          columnGap: "1.1vw",
          rowGap: "1.97vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "3.3vw",
            flexWrap: "wrap",
            justifyContent: { xs: "space-between" }
          }}
        >
          <SearchInput />
          <Button
            variant="outlined"
            startIcon={<FilterListIcon />}
            sx={{
              textTransform: "none",
              padding: "1.4vh 1.1vw",
              width: { xs: "29vw", sm: "14vw", md: "11.1vw" },
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
        {!isXsAndBelow && <SortByInput />}
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
          gap: { xs: "5vh", sm: "4vw", md: "3vw" },
          flexWrap: "wrap",
          justifyContent: "space-between",
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

      {/* Pagination */}
      {watches && (
        <Stack sx={{ mt: "2rem" }} alignItems="center">
          <Pagination
            count={5}
            variant="outlined"
            shape="rounded"
            color="primary"
            size="large"
            page={page}
            onChange={handleChangePage}
          />
        </Stack>
      )}
    </Box>
  );
}

export default LandingContent;
