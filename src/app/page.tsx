"use client";
import { Fab, Typography } from "@mui/material";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import LandingContent from "./components/LandingContent";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
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
              fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
              padding: "0.9vh 2.3vw",
              position: "fixed",
              right: 20,
              bottom: 40,
              borderRadius: "1vw",
            }}
          >
            <ShoppingCartOutlinedIcon
              sx={{
                mr: { xs: "0.3rem", sm: "0.5rem", md: "0.5rem" },
                fontSize: { xs: "18px", sm: "20px", md: "24px" },
              }}
            />
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
