import { Box } from "@mui/material";
import Navbar from "@/_components/header/Navbar";
import ProductDetailHero from "./_sections/HeroProductDetail";
// import Footer from "@/_components/Footer";

export default function ProductDetail() {
  return (
    <Box>
      <Navbar />
      <ProductDetailHero />
      {/* <Footer /> */}
    </Box>
  );
}
