"use client";
import { Box } from "@mui/material";
import Navbar from "@/_components/header/Navbar";
import HeroAboutUs from "./_sections/HeroAboutUs";
import Welcome from "./_sections/Welcome";
import UniqueFeatures from "./_sections/UniqueFeatures";
import OurMission from "./_sections/OurMission";
import PremiumCollection from "./_sections/PremiumCollection";
import Footer from "@/_components/Footer";
import { useEffect, useState } from "react";

export default function AboutUs() {
  const [noOfCartItem, setNumberOfCartItems] = useState<number>(0);

  useEffect(() => {
    const Item = localStorage.getItem("noOfCartItem");
    if (Item) {
      setNumberOfCartItems(JSON.parse(Item));
    }
  }, []);

  return (
    <Box>
      <Navbar cartItems={noOfCartItem} />
      <HeroAboutUs />
      <Welcome />
      <UniqueFeatures />
      <OurMission />
      <PremiumCollection />
      <Footer />
    </Box>
  );
}
