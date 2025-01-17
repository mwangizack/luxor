"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box } from "@mui/material";

function layout(props: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <Box
        component="main"
        sx={{
          minHeight: "90vh",
          padding: { padding: "2.4vh 7vw" },
        }}
      >
        {props.children}
      </Box>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default layout;
