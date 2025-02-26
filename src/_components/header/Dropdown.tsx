"use client";
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { colorTheme, fontSize } from "@/_utils/themes";
import Image from "next/image";
import pngs from "@/_assets/pngs";
import { useRouter } from "next/navigation";

const Dropdown: React.FC<{
  category: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}> = ({ onMouseEnter, onMouseLeave }) => {
  const headingStyles = {
    fontSize: fontSize.p2,
    color: colorTheme.red,
    textDecoration: "underline",
    fontWeight: "700",
    textTransform: "uppercase",
    paddingBottom: "15px",
  };

  const textStyles = {
    color: colorTheme.SoftAsh,
    fontSize: fontSize.p5,
    cursor: "pointer",
    paddingBottom: "8px",
    "&:hover": { color: colorTheme.forestShadow },
    "&:active": { color: colorTheme.forestShadow },
  };

  const router = useRouter();

  // Define dropdown categories dynamically
  const categories = [
    {
      title: "Type",
      items: [
        { label: "2 Seaters", query: "seaters=2+Seaters+sofas" },
        { label: "3 Seaters", query: "seaters=3+Seaters+sofas" },
        { label: "4 Seaters", query: "seaters=4+Seaters+sofas" },
        { label: "Corner", query: "seaters=Corner+sofas" },
        { label: "Sofa Chair", query: "seaters=Chairs" },
        { label: "Foot-Stools", query: "seaters=Footstools" },
      ],
    },
    {
      title: "Material",
      items: [
        { label: "Fabric Sofas", query: "material=Fabric+Sofas" },
        { label: "Leather Sofas", query: "material=Leather+Sofas" },
        { label: "Fabric Chair", query: "material=Fabric+Chair" },
        { label: "Boucle Sofas", query: "" }, // No query but keeping for consistency
      ],
    },
    {
      title: "Price",
      items: [
        { label: "Under £700", query: "minPrice=100&maxPrice=700" },
        { label: "Under £1000", query: "minPrice=100&maxPrice=1000" },
        { label: "Under £1500", query: "minPrice=100&maxPrice=1500" },
      ],
    },
    // Uncomment if you want to enable Models and Clours
    {
      title: "Model",
      items: [
        { label: "Buoyant", query: "" },
        { label: "Designer Fabric", query: "" },
        { label: "La-Z-Boy", query: "" },
        { label: "Red Rose", query: "" },
      ],
    },

    {
      title: "Color",
      items: [
        {
          label: "Yellow",
          query: `colour=${encodeURIComponent(colorTheme.choiceYellow)}`,
        },
        {
          label: "White",
          query: `colour=${encodeURIComponent(colorTheme.choiceWhite)}`,
        },
        {
          label: "Grey",
          query: `colour=${encodeURIComponent(colorTheme.choiceGrey)}`,
        },
        {
          label: "Blue",
          query: `colour=${encodeURIComponent(colorTheme.choiceBlue)}`,
        },
        {
          label: "Charcoal",
          query: `colour=${encodeURIComponent(colorTheme.choiceCharcoal)}`,
        },
        {
          label: "Brown",
          query: `colour=${encodeURIComponent(colorTheme.choiceBrown)}`,
        },
        {
          label: "Light Blue",
          query: `colour=${encodeURIComponent(colorTheme.choiceLightBlue)}`,
        },
      ],
    },
  ];

  return (
    <Box
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      sx={{
        position: "absolute",
        top: "100%",
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        backgroundColor: colorTheme.lightGrey,
        zIndex: 1000,
        padding: {
          xs: "20px",
          md: "20px 50px",
          lg: "20px 90px",
          xl: "20px 120px",
        },
        boxShadow: `0px 4px 6px ${colorTheme.subtleBlack}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={4} justifyContent="center">
          {categories.map((category) => (
            <Grid item xs={2} key={category.title}>
              <Typography
                sx={{ ...headingStyles, textAlign: "left" }}
                variant="h6"
                gutterBottom
              >
                {category.title}
              </Typography>
              {category.items.map(({ label, query }) => (
                <Typography
                  key={label}
                  onClick={() => query && router.push(`/product?${query}`)}
                  sx={{ ...textStyles, textAlign: "left" }}
                >
                  {label}
                </Typography>
              ))}
            </Grid>
          ))}

          {/* Christmas Promo Section */}
          <Grid item xs={2}>
            <Box sx={{ textAlign: "center" }}>
              <Typography sx={headingStyles} variant="h6" gutterBottom>
                Christmas Promo
              </Typography>
              <Box
                sx={{
                  maxWidth: "170px",
                  height: "auto",
                  marginBottom: "10px",
                  margin: "auto",
                }}
              >
                <Image
                  src={pngs.RedRoseSofa}
                  alt="Red Rose Sofa"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </Box>
              <Typography sx={textStyles} variant="body2">
                Red Rose Sofas
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dropdown;
