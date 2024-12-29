"use client";
import React from "react";
import { Box, Grid } from "@mui/material";
import { colorTheme } from "@/_utils/themes";
import pngs from "@/_assets/pngs";
import FreshArrivalsCard from "../_components/FreshArrivalsCard";
import CustomPagination from "../_components/CustomPagination";
import Header from "../_components/Header";

export default function RezultForItem() {
  const products = [
    {
      imageSrc: pngs.Sofa1,
      productName: "Stylish Chair",
      details: "A comfortable stylish chair for your home.",
      currentPrice: "$99.99",
      buttonText: "Go To Shop",
    },
    {
      imageSrc: pngs.Sofa1,
      productName: "Modern Sofa",
      details: "Elegant and modern sofa for living rooms.",
      currentPrice: "$299.99",
      buttonText: "Go To Shop",
    },
    {
      imageSrc: pngs.Sofa1,
      productName: "Cozy Armchair",
      details: "Relax in this cozy armchair.",
      currentPrice: "$199.99",
      buttonText: "Go To Shop",
    },
    {
      imageSrc: pngs.Sofa1,
      productName: "Wooden Table",
      details: "Sturdy wooden table for any space.",
      currentPrice: "$159.99",
      buttonText: "Go To Shop",
    },
    {
      imageSrc: pngs.Sofa1,
      productName: "Stylish Chair",
      details: "A comfortable stylish chair for your home.",
      currentPrice: "$99.99",
      buttonText: "Go To Shop",
    },
    {
      imageSrc: pngs.Sofa1,
      productName: "Modern Sofa",
      details: "Elegant and modern sofa for living rooms.",
      currentPrice: "$299.99",
      buttonText: "Go To Shop",
    },
    {
      imageSrc: pngs.Sofa1,
      productName: "Cozy Armchair",
      details: "Relax in this cozy armchair.",
      currentPrice: "$199.99",
      buttonText: "Go To Shop",
    },
    {
      imageSrc: pngs.Sofa1,
      productName: "Wooden Table",
      details: "Sturdy wooden table for any space.",
      currentPrice: "$159.99",
      buttonText: "Go To Shop",
    },
    {
      imageSrc: pngs.Sofa1,
      productName: "Stylish Chair",
      details: "A comfortable stylish chair for your home.",
      currentPrice: "$99.99",
      buttonText: "Go To Shop",
    },
    {
      imageSrc: pngs.Sofa1,
      productName: "Modern Sofa",
      details: "Elegant and modern sofa for living rooms.",
      currentPrice: "$299.99",
      buttonText: "Go To Shop",
    },
    {
      imageSrc: pngs.Sofa1,
      productName: "Cozy Armchair",
      details: "Relax in this cozy armchair.",
      currentPrice: "$199.99",
      buttonText: "Go To Shop",
    },
    {
      imageSrc: pngs.Sofa1,
      productName: "Wooden Table",
      details: "Sturdy wooden table for any space.",
      currentPrice: "$159.99",
      buttonText: "Go To Shop",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: colorTheme.white,
        padding: {
          xs: "40px 20px",
          sm: "50px 30px",
          md: "50px 100px",
          lg: "70px 150px",
        },
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {/* header  */}
        <Header />

        <Grid container spacing={3}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <FreshArrivalsCard
                imageSrc={product.imageSrc}
                productName={product.productName}
                details={product.details}
                currentPrice={product.currentPrice}
                buttonText={product.buttonText}
              />
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            paddingTop: {
              xs: "40px",
              sm: "50px",
              md: "50px",
              lg: "70px",
            },
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <CustomPagination count={3} />
        </Box>
      </Box>
    </Box>
  );
}
