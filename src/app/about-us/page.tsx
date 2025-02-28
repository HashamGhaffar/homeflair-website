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
      <Box
        sx={{
          backgroundColor: { lg: "#2F302C" },
          padding: { lg: "0 60px" },
          marginTop: "-1px",
        }}
      >
        <Box sx={{ maxWidth: "1440px", margin: "auto" }}>
          <HeroAboutUs />
          <Welcome />
          <UniqueFeatures />
          <OurMission />
          <PremiumCollection />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
