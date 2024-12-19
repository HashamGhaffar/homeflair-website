"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { colorTheme, fontSize } from "@/_utils/themes";

const ProductNavigation: React.FC = () => {
  const categories = [
    "All sofas",
    "Fabric sofas",
    "Corner sofas",
    "Leather sofas",
    "Chair",
    "Quick delivery",
    "Accessories",
  ];

  return (
    <Box sx={{ backgroundColor: colorTheme.forestShadow, paddingX: "20px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "none", md: "center" },
          gap: { xs: "20px", sm: "30px" },
          overflowX: "auto",
          whiteSpace: "nowrap",
          width: "100%",
          padding: "10px 0",
          boxSizing: "border-box",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {categories.map((category, index) => (
          <Typography
            key={index}
            sx={{
              flex: "0 0 auto",
              fontSize: fontSize.secondaryTypography,
              color: colorTheme.cloudGray,
              cursor: "pointer",
            }}
          >
            {category}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default ProductNavigation;
