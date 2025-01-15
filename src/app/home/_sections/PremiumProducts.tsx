import React from "react";
import { Box, Typography } from "@mui/material";
import { colorTheme, fontSize } from "@/_utils/themes";
import PremiumProductSlider from "../_components/PremiumProductSlider";
import { Product } from "@/types/product";

export default function PremiumProducts({ products }: { products: Product[] }) {
  return (
    <Box
      sx={{
        background: `linear-gradient(90deg, ${colorTheme.darkGrey} 0%, ${colorTheme.forestShadow} 100%)`,
        paddingY: { xs: "40px", sm: "60px" },
        paddingX: { xs: "20px", sm: "40px", lg: "80px" },
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          color: colorTheme.White,
          fontSize: fontSize.h6,
          fontWeight: "800",
          marginBottom: { xs: "20px", sm: "40px" },
          fontFamily: "'Playfair Display', serif",
        }}
      >
        Our Premium Products
      </Typography>
      <PremiumProductSlider products={products} />
    </Box>
  );
}
