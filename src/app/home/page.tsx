import { Box } from "@mui/material";
import Footer from "@/_components/Footer";
import Navbar from "@/_components/header/Navbar";
import Hero from "./_sections/Hero";

export default function HomePage() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <Footer />
    </Box>
  );
}
