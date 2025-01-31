"use client";
import React, { useEffect, useMemo } from "react";
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import { colorTheme, fontSize } from "@/_utils/themes";
import { LastSavingItems } from "../_components/LastSavingItems";
import PremiumCollectionSlider from "../_components/PremiumCollectionSlider";
import { Product } from "@/types/product";

export default function BestSeller({
  products,
}: {
  products: Product[];
}): JSX.Element {
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(
    null
  );

  useEffect(() => {
    if (products.length) {
      setSelectedProduct(products[0]);
    }
  }, [products]);

  const productItems = useMemo(() => {
    return (
      selectedProduct?.images.slice(0, 3).map((image, index) => ({
        imageSrc: image,
        altText: `${selectedProduct.name} - Image ${index + 1}`,
        label: selectedProduct.shortDescription || selectedProduct.name,
      })) || []
    );
  }, [selectedProduct]);

  return (
    <Box
      sx={{
        paddingY: {
          xs: "30px",
          sm: "60px",
        },
        paddingX: { xs: "30px", sm: "0" },
        backgroundColor: colorTheme.pureFog,
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          color: colorTheme.forestShadow,
          fontSize: fontSize.h6,
          width: "100%",
          fontFamily: "'Playfair Display', serif",
          fontWeight: "800",
          textTransform: "uppercase",
        }}
      >
        best seller
      </Typography>
      <LastSavingItems items={productItems} />
      <PremiumCollectionSlider
        products={products}
        setSelectedProduct={setSelectedProduct}
        selectedProduct={selectedProduct}
      />
    </Box>
  );
}
