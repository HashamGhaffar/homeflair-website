import { Box } from "@mui/material";
import Navbar from "@/_components/header/Navbar";
import Hero from "./_sections/Hero";
import ChristmasSpecials from "./_sections/ChristmasSpecials";
import Footer from "@/_components/Footer";

export default function HomePage() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <ChristmasSpecials />
      <Footer />
    </Box>
  );
}
