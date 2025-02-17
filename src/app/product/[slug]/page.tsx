"use client";
import { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import Navbar from "@/_components/header/Navbar";
import ProductDetailHero from "./_sections/HeroProductDetail";
import Menu from "./_sections/Menu";
import Seaters from "./_sections/Seaters";
import Detail from "./_sections/Detail";
import Recommendation from "./_sections/Recommendation";
import Footer from "@/_components/Footer";
import { useParams } from "next/navigation";
import { getProductsBySlug } from "@/services/productApi";
import { AttributeOption, Product } from "@/types/product";

export default function ProductDetail() {
  // Get params
  const { slug } = useParams() as { slug: string };
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedOptions, setSelectedOptions] = useState(null);
  const [selectedModel, setSelectedModel] = useState<AttributeOption | null>(
    null
  );

  useEffect(() => {
    if (!slug) return;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await getProductsBySlug(slug);
        setProduct(data);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError("Failed to fetch product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        {error}
      </Box>
    );
  }

  return (
    <Box>
      <Navbar />
      {product && <ProductDetailHero product={product} />}
      {product && (
        <Menu
          product={product}
          setSelectedOptions={setSelectedOptions}
          selectedOptions={selectedOptions}
        />
      )}
      {product?.attributes?.find((attr) => attr.type === "model") && (
        <Seaters
          options={
            product.attributes.find((attr) => attr.type === "model")!.options
          }
          setSelectedModel={setSelectedModel}
          selectedModel={selectedModel}
        />
      )}

      <Detail
        product={product}
        selectedModel={selectedModel}
        selectedOptions={selectedOptions}
      />
      <Recommendation />
      <Footer />
    </Box>
  );
}
