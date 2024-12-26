import { Box } from "@mui/material";
import Navbar from "@/_components/header/Navbar";
import HeroAboutUs from "./_sections/HeroAboutUs";
// import Footer from "@/_components/Footer";

export default function HomePage() {
  return (
    <Box>
      <Navbar />
      <HeroAboutUs />
      {/* <Footer /> */}
    </Box>
  );
}
