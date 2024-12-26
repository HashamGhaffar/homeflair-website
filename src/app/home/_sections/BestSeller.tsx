"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import { colorTheme, fontSize } from "@/_utils/themes";
import { LastSavingItems } from "../_components/LastSavingItems";
import PremiumCollectionSlider from "../_components/PremiumCollectionSlider";

export default function BestSeller(): JSX.Element {
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
      <LastSavingItems />
      <PremiumCollectionSlider />
    </Box>
  );
}
