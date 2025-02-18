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
import { getProductPrice } from "@/_utils/helpers";
import { addToCart, AddToCartRequest } from "@/services/cartApi";
import { showError, showSuccess } from "@/_utils/toast";

export interface ProductAttributes {
  [attributeName: string]: AttributeOption;
}

export default function ProductDetail() {
  // Get params
  const { slug } = useParams() as { slug: string };
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [noOfCartItem, setNumberOfCartItems] = useState<number>(0);

  const [selectedOptions, setSelectedOptions] = useState<ProductAttributes>({});
  const [selectedModel, setSelectedModel] = useState<AttributeOption | null>(
    null
  );

  useEffect(() => {
    if (!slug) return;

    const Item = localStorage.getItem("noOfCartItem");
    if (Item) {
      setNumberOfCartItems(JSON.parse(Item));
    }
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

  const addProductToCart = async () => {
    const price = getProductPrice(product, selectedModel);
    try {
      const cartSelectedOptions: Record<string, string> = {};
      if (selectedOptions) {
        Object.keys(selectedOptions).forEach((key) => {
          cartSelectedOptions[key] = selectedOptions[key].value;
        });
      }
      if (selectedModel) {
        const modelKeys: string[] = [];
        product?.attributes.forEach((attr) => {
          if (attr.type === "model") {
            modelKeys.push(attr.name);
          }
        });
        modelKeys.forEach((key) => {
          cartSelectedOptions[key] = selectedModel?.value;
        });
      }
      const itemData: AddToCartRequest = {
        productId: product?._id ?? "",
        price: typeof price === "string" ? parseFloat(price) : price,
        quantity: 1,
        sessionId: localStorage.getItem("sessionId") ?? "",
        selectedOptions: cartSelectedOptions,
      };
      await addToCart(itemData, setNumberOfCartItems);
      showSuccess("Product added to the cart");

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      console.log("error: ", error);
      showError("Failed to add into the cart");
    }
  };

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
      <Navbar cartItems={noOfCartItem} />
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
        addProductToCart={addProductToCart}
      />
      <Recommendation />
      <Footer />
    </Box>
  );
}
