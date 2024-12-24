import { Box } from "@mui/material";
import Navbar from "@/_components/header/Navbar";
import Hero from "./_sections/Hero";
import ChristmasSpecials from "./_sections/ChristmasSpecials";
import Footer from "@/_components/Footer";
import FreshArrivals from "./_sections/FreshArrivals";
import LastSavings from "./_sections/LastSavings";

export default function HomePage() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <ChristmasSpecials />
      <FreshArrivals />
      <LastSavings />
      <Footer />
    </Box>
  );
}
