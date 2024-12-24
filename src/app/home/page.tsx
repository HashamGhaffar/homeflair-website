import { Box } from "@mui/material";
import Navbar from "@/_components/header/Navbar";
import Hero from "./_sections/Hero";
import ChristmasSpecials from "./_sections/ChristmasSpecials";
import Footer from "@/_components/Footer";
import FreshArrivals from "./_sections/FreshArrivals";

export default function HomePage() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <ChristmasSpecials />
      <FreshArrivals />
      <Footer />
    </Box>
  );
}
