import { Typography } from "@mui/material";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import LandingContent from "./components/LandingContent";

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
      <footer>{/* Add a component */}</footer>
    </>
  );
}
