"use client";

import { Box } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import Navbar from "@/_components/header/Navbar";
import HeroProduct from "./_sections/HeroProduct";
import RezultForItem from "./_sections/RezultForItem";
import Footer from "@/_components/Footer";
import { Product } from "@/types/product";
import { getProductsByTag } from "@/services/productApi";

export default function ProductPage() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const tags = searchParams.get("tags")?.replace(/['"]+/g, ""); // Remove quotes if any

      if (tags) {
        setLoading(true);
        try {
          const data = await getProductsByTag(tags);
          setProducts(data);
        } catch (error) {
          console.error("Error fetching products:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchProducts();
  }, [searchParams]);

  return (
    <Box>
      <Navbar />
      <HeroProduct />
      <RezultForItem products={products} loading={loading} />
      <Footer />
    </Box>
  );
}
