import { Box } from "@mui/material";
import Navbar from "@/_components/header/Navbar";
import Hero from "./_sections/Hero";
import ChristmasSpecials from "./_sections/ChristmasSpecials";
import FreshArrivals from "./_sections/FreshArrivals";
import LastSavings from "./_sections/LastSavings";
import BestSeller from "./_sections/BestSeller";
import PremiumProducts from "./_sections/PremiumProducts";
import CustomizedSize from "./_sections/CustomizedSize";
import CustomizedColor from "./_sections/CustomizedColor";
import Footer from "@/_components/Footer";

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
      <CustomizedSize />
      <CustomizedColor />
      <Footer />
    </Box>
  );
}
