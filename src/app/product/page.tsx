"use client";

import { Box } from "@mui/material";

import Navbar from "@/_components/header/Navbar";
import HeroProduct from "./_sections/HeroProduct";
import Footer from "@/_components/Footer";
import RezultForItem from "./_sections/RezultForItem";

export default function ProductPage() {
  return (
    <Box>
      <Navbar />
      <HeroProduct />
      <RezultForItem />
      <Footer />
    </Box>
  );
}
