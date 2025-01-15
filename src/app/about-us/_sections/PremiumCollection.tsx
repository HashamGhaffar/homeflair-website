"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { colorTheme, fontSize } from "@/_utils/themes";
import PremiumCollectionSlider from "@/app/home/_components/PremiumCollectionSlider";

export default function PremiumCollection() {
  return (
    <Box
      sx={{
        backgroundColor: colorTheme.pureFog,
        padding: {
          xs: "40px 20px",
          sm: "50px 30px",
          md: "50px 0",
          lg: "70px 0",
        },
      }}
    >
      <Box
        sx={{
          // maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <Typography
          sx={{
            fontSize: fontSize.h6,
            color: colorTheme.forestShadow,
            fontWeight: "900",
            fontFamily: "'Playfair Display', serif",
            paddingBottom: {
              xs: "40px",
              sm: "50px",
              md: "50px",
              lg: "70px",
            },
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          premium collection
        </Typography>
        <PremiumCollectionSlider
          products={[]}
          setSelectedProduct={function (): void {
            throw new Error("Function not implemented.");
          }}
          selectedProduct={null}
        />
      </Box>
    </Box>
  );
}
