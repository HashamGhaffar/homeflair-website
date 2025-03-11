"use client";
import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import { colorTheme, fontSize } from "@/_utils/themes";
import Image from "next/image";
import pngs from "@/_assets/pngs";

export default function HeroProduct() {
  return (
    <Box
      sx={{
        background: `linear-gradient(90deg, ${colorTheme.softWhite} 0%, ${colorTheme.lightSilver} 100%)`,
        padding: {
          xs: "40px 20px",
          sm: "50px 30px",
          md: "50px 100px",
          lg: "70px 150px",
        },
        maxWidth: "1500px",
        margin: "auto",
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        alignItems: { md: "center" },
        gap: { xs: "30px", sm: "50px", lg: "80px", xl: "120px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "flex-start" },
          flex: 1,
        }}
      >
        <Image
          src={pngs.HeroProduct}
          alt="Hero About Us"
          width={613}
          height={329.79}
          style={{
            objectFit: "contain",
            width: "100%",
            height: "auto",
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: { xs: "flex-start", md: "flex-start" },
          gap: "16px",
          textAlign: "left",
          maxWidth: "340px",
        }}
      >
        <Typography
          sx={{
            fontSize: fontSize.h6,
            color: colorTheme.softCharcoal,
            textTransform: "uppercase",
          }}
        >
          WELCOME TO OUR
        </Typography>

        <Typography
          sx={{
            fontSize: fontSize.h2,
            color: colorTheme.red,
            fontWeight: "800",
            fontFamily: "'Playfair Display', serif",
            textTransform: "uppercase",
          }}
        >
          homeflair
        </Typography>

        <Typography
          sx={{
            fontSize: fontSize.h2,
            color: colorTheme.forestShadow,
            fontWeight: "800",
            textTransform: "uppercase",
          }}
        >
          GALLERY
        </Typography>

        {/* MUI Divider */}
        <Divider
          sx={{
            borderColor: colorTheme.forestShadow,
            borderWidth: "1px",
            width: "50%",
            marginY: "16px",
          }}
        />

        <Typography
          sx={{
            fontSize: fontSize.p4,
            color: colorTheme.forestShadow,
            fontWeight: "700",
            textTransform: "uppercase",
          }}
        >
          BROWSE OUR SELECTIONS
        </Typography>
        <Typography
          sx={{
            fontSize: fontSize.p6,
            color: colorTheme.softCharcoal,
          }}
        >
          Featuring sleek designs and innovative materials that seamlessly blend
          form and function.
        </Typography>
      </Box>
    </Box>
  );
}
