"use client";
import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { colorTheme, fontSize } from "@/_utils/themes";
import ProductDetails from "../_components/ProductDetails";
import pngs from "@/_assets/pngs";
import OrderSummary from "@/_components/OrderSummery";

export default function OrderDetail() {
  return (
    <Box
      sx={{
        padding: {
          xs: "40px 20px",
          sm: "50px 30px",
          md: "50px 100px",
          lg: "70px 120px",
        },
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Typography
          sx={{
            fontSize: fontSize.h6,
            color: colorTheme.subtleGrey,
            marginBottom: { xs: "30px", sm: "40px", md: "60px" },
            textTransform: "uppercase",
          }}
        >
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              color: colorTheme.forestShadow,
              fontWeight: "800",
            }}
          >
            Checkout
          </span>{" "}
          / 2 Items
        </Typography>

        <Grid container spacing={4} alignItems={"center"}>
          <Grid item xs={12} md={8}>
            <ProductDetails
              heading="SOFA EMPUK BANGET"
              mainImage={pngs.LeatherSofa}
              colorImage={pngs.RedColor}
              scatterFabricImage={pngs.Fabric}
              bodyFabricImage={pngs.Fabric}
              seater="2 Seater"
              price="£149.99"
            />
            <Box sx={{ paddingTop: { xs: "40px", md: "60px", xl: "80px" } }}>
              <ProductDetails
                heading="SLEEKLINE  MODULUS MORDERN SOFA"
                mainImage={pngs.LeatherSofa}
                colorImage={pngs.RedColor}
                scatterFabricImage={pngs.Fabric}
                bodyFabricImage={pngs.Fabric}
                seater="2 Seater"
                price="£149.99"
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <OrderSummary />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
