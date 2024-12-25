import { Box } from "@mui/material";
import Navbar from "@/_components/header/Navbar";
import Hero from "./_sections/Hero";
import ChristmasSpecials from "./_sections/ChristmasSpecials";
import Footer from "@/_components/Footer";
import FreshArrivals from "./_sections/FreshArrivals";
import LastSavings from "./_sections/LastSavings";
import BestSeller from "./_sections/BestSeller";
import PremiumProducts from "./_sections/PremiumProducts";

export default function HomePage() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <ChristmasSpecials />
      <FreshArrivals />
      <LastSavings />
      <BestSeller />
      <PremiumProducts />
      <Footer />
    </Box>
  );
}
