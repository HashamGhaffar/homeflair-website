"use client";
import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { colorTheme, fontSize } from "@/_utils/themes";
import svgs from "@/_assets/svgs";
import Image from "next/image";
import pngs from "@/_assets/pngs";
import FreshArrivalsCard from "../_components/FreshArrivalsCard";
import CustomPagination from "../_components/CustomPagination";

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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: {
              xs: "40px",
              sm: "50px",
              md: "50px",
              lg: "70px",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: fontSize.h6,
              fontWeight: "700",
              fontFamily: "'Playfair Display', serif",
              color: colorTheme.forestShadow,
              textTransform: "uppercase",
              "& > span:first-of-type": {
                textDecoration: "underline",
                textDecorationThickness: {
                  xs: "2px",
                  sm: "3px",
                  md: "4px",
                },
                textUnderlineOffset: {
                  xs: "4px",
                  sm: "6px",
                  md: "10px",
                },
                fontSize: "inherit",
                fontWeight: "inherit",
                fontFamily: "inherit",
                color: "inherit",
              },
              "& > span:not(:first-of-type)": {
                color: colorTheme.red,
              },
            }}
          >
            <span>res</span>
            ult for &quot;
            <span>sofa</span>
            &quot;
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "25px" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Typography
                sx={{ fontSize: fontSize.p3, color: colorTheme.forestShadow }}
              >
                Sort By
              </Typography>
              <Image
                style={{ width: "16px", height: "auto", objectFit: "contain" }}
                src={svgs.SortBy}
                alt="sort by"
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Typography
                sx={{ fontSize: fontSize.p3, color: colorTheme.forestShadow }}
              >
                Filter
              </Typography>
              <Image
                style={{ width: "16px", height: "auto", objectFit: "contain" }}
                src={svgs.Filter}
                alt="filter"
              />
            </Box>
          </Box>
        </Box>

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
        {/* padination */}
        {/* add pagination there  */}
      </Box>
    </Box>
  );
}
