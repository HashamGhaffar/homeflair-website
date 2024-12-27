import { Box } from "@mui/material";
import Navbar from "@/_components/header/Navbar";
import HeroProduct from "./_sections/HeroProduct";
// import Footer from "@/_components/Footer";

export default function HomePage() {
  return (
    <Box>
      <Navbar />
      <HeroProduct />
      {/* <Footer /> */}
    </Box>
  );
}
