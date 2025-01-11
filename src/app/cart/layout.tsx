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
          minHeight: "78vh",
          padding: { xs: "20px 30px", sm: "20px 65px", md: "20px 100px" },
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
