"use client";

import { Box } from "@mui/material";

import Navbar from "@/_components/header/Navbar";
import HeroProduct from "./_sections/HeroProduct";
import Footer from "@/_components/Footer";
import RezultForItem from "./_sections/RezultForItem";
import { Suspense, useEffect, useState } from "react";

export default function ProductPage() {
  const [noOfCartItem, setNumberOfCartItems] = useState<number>(0);

  useEffect(() => {
    const Item = localStorage.getItem("noOfCartItem");
    if (Item) {
      setNumberOfCartItems(JSON.parse(Item));
    }
  }, []);
  return (
    <Box>
      <Suspense fallback={<div>Loading product details...</div>}>
        <Navbar cartItems={noOfCartItem} />
        <Box
          sx={{
            backgroundColor: { lg: "#2F302C" },
            padding: { lg: "0 60px" },
            marginTop: "-1px",
          }}
        >
          <HeroProduct />
          <RezultForItem />
        </Box>
        <Footer />
      </Suspense>
    </Box>
  );
}
