"use client";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";

import Navbar from "@/_components/header/Navbar";
import Hero from "./_sections/Hero";
import ChristmasSpecials from "./_sections/ChristmasSpecials";
import FreshArrivals from "./_sections/FreshArrivals";

import LastSavings from "./_sections/LastSavings";
import BestSeller from "./_sections/BestSeller";
import PremiumProducts from "./_sections/PremiumProducts";
import CustomizedSize from "./_sections/CustomizedSize";
import CustomizedColor from "./_sections/CustomizedColor";
import FallInLove from "./_sections/FallInLove";
import DecorAccessories from "./_sections/DecorAccessories";
import Footer from "@/_components/Footer";

// import { Product } from "@/types/product";
// import { getProductsByTag } from "@/services/productApi";

import { premiumProduct, products } from "@/_utils/mock";
export default function HomePage() {
  // const [products, setProducts] = useState<Product[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string | null>(null);

  // const fetchProducts = async () => {
  //   try {
  //     setLoading(true);
  //     const data = await getProductsByTag("In Stock");
  //     setProducts(data);
  //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   } catch (err) {
  //     setError("Failed to load products. Please try again later.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // console.log(products, "products");
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
      <Hero />
      <Box
        sx={{
          overflow: "hidden",
          backgroundColor: { lg: "#2F302C" },
          padding: { lg: "0 60px" },
          marginTop: "-1px",
        }}
      >
        <ChristmasSpecials products={products} />
        <CustomizedSize />
        <CustomizedColor />
        <FreshArrivals products={products} />
        <LastSavings products={products} />
        <BestSeller products={products} />
        <PremiumProducts products={premiumProduct} />
        <DecorAccessories />
        <FallInLove />
      </Box>
      <Footer />
    </Box>
  );
}
