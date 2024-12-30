import { Box } from "@mui/material";
import Navbar from "@/_components/header/Navbar";
import ProductDetailHero from "./_sections/HeroProductDetail";
import Menu from "./_sections/Menu";
import Seaters from "./_sections/Seaters";
import Detail from "./_sections/Detail";
// import Footer from "@/_components/Footer";

export default function ProductDetail() {
  return (
    <Box>
      <Navbar />
      <ProductDetailHero />
      <Menu />
      <Seaters />
      <Detail />
      {/* <Footer /> */}
    </Box>
  );
}
