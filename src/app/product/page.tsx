"use client";

import { Box } from "@mui/material";

import Navbar from "@/_components/header/Navbar";
import HeroProduct from "./_sections/HeroProduct";
import Footer from "@/_components/Footer";
import RezultForItem from "./_sections/RezultForItem";
import { Suspense } from "react";

export default function ProductPage() {
  return (
    <Box>
      <Suspense fallback={<div>Loading product details...</div>}>
        <Navbar />
        <HeroProduct />
        <RezultForItem />
        <Footer />
      </Suspense>
    </Box>
  );
}
