import { Box } from "@mui/material";
import Navbar from "@/_components/header/Navbar";
import HeroProduct from "./_sections/HeroProduct";
import RezultForItem from "./_sections/RezultForItem";
import Footer from "@/_components/Footer";

export default function HomePage() {
  return (
    <Box>
      <Navbar />
      <HeroProduct />
      <RezultForItem />
      <Footer />
    </Box>
  );
}
