"use client";
import { Fab, Typography } from "@mui/material";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import LandingContent from "./components/LandingContent";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import React from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const cartItemsCount = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );
  const router = useRouter();

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <LandingContent />

        {/* View cart button - only shows when there are items in the cart */}
        {cartItemsCount > 0 && (
          <Fab
            color="secondary"
            variant="extended"
            onClick={() => router.push("/cart")}
            sx={{
              textTransform: "none",
              fontWeight: "600",
              padding: "0.5rem 2rem",
              position: "fixed",
              right: 20,
              bottom: 40,
            }}
          >
            View Cart
          </Fab>
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
