import { Box } from "@mui/material";
import Hero from "./_sections/Hero";
import Navbar from "@/_components/Navbar";
import Footer from "@/_components/Footer";

export default function HomePage() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <Footer />
    </Box>
  );
}
