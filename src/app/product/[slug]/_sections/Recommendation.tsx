"use client";
import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import { colorTheme, fontSize } from "@/_utils/themes";
import PremiumCollectionSlider from "@/app/home/_components/PremiumCollectionSlider";
import { products } from "@/_utils/mock";

export default function Recommendation() {
  return (
    <>
      <Box
        sx={{
          paddingY: {
            xs: "20px",
            sm: "40px",
            md: "60px",
          },
        }}
      >
        <Box
          sx={{
            maxWidth: "1440px",
            margin: "auto",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: fontSize.h6,
                textTransform: "uppercase",
                color: colorTheme.forestShadow,
                textAlign: "center",
                fontWeight: "900",
                paddingBottom: {
                  xs: "20px",
                  sm: "40px",
                  md: "60px",
                },
                paddingX: {
                  xs: "20px",
                  sm: "40px",
                  md: "60px",
                },
              }}
            >
              BEST RECOMMENDATIONS
            </Typography>
            <PremiumCollectionSlider
              products={products}
              setSelectedProduct={function (): void {
                throw new Error("Function not implemented.");
              }}
              selectedProduct={null}
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginX: { xs: "20px", sm: "40px", md: "80px", lg: "100px" },
        }}
      >
        <Divider
          sx={{
            border: `0.75px solid ${colorTheme.transparentForestShadow}`,
            width: "100%",
            maxWidth: "1200px",
          }}
        />
      </Box>
    </>
  );
}
