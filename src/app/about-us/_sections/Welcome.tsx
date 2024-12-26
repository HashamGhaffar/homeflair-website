"use client";
import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { colorTheme, fontSize } from "@/_utils/themes";
import Image from "next/image";
import pngs from "@/_assets/pngs";
import Button from "@/_components/Button";

export default function HeroAboutUs() {
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
        <Grid
          container
          columnSpacing={4}
          rowSpacing={4}
          alignItems="flex-start"
          direction={{ xs: "column", md: "row" }}
        >
          <Grid item xs={12} md={6}>
            <Box sx={{ height: "auto", maxWidth: "554px" }}>
              <Image
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                src={pngs.Welcome}
                alt="Welcome"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontSize: fontSize.h6,
                color: colorTheme.forestShadow,
                fontWeight: "900",
                fontFamily: "'Playfair Display', serif",
                marginBottom: { xs: "16px", md: "20px" },
              }}
            >
              Welcome to Homeflair
            </Typography>
            <Typography
              sx={{
                fontSize: fontSize.p2,
                color: colorTheme.softCharcoal,
                marginBottom: { xs: "25px", md: "30px" },
              }}
            >
              At <span style={{ color: colorTheme.red }}>Homeflair</span>, we
              believe that furniture is more than just utility—it&apos;s an
              expression of style, comfort, and the art of living. Established
              with a passion for craftsmanship and design, we strive to create
              pieces that transform your house into a home. Our journey began
              with a simple idea: to provide high-quality, stylish furniture
              that suits every taste and budget. From timeless classics to
              contemporary designs, our collection is carefully curated to bring
              elegance and functionality to your space.
            </Typography>
            <Button text="Let's Go To Shop" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
