"use client";
import { Box } from "@mui/material";
import Navbar from "@/_components/header/Navbar";
import ContactDetails from "./_sections/ContactDetails";
import Footer from "@/_components/Footer";
import { useEffect, useState } from "react";

export default function ContactUs() {
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
      <ContactDetails />
      <Footer />
    </Box>
  );
}
