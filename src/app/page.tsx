import { Typography } from "@mui/material";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import LandingContent from "./components/LandingContent";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <LandingContent />
      </main>
      <footer><Footer /></footer>
    </>
  );
}
