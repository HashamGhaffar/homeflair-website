"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { colorTheme, fontSize } from "@/_utils/themes";
import Image from "next/image";
import pngs from "@/_assets/pngs";

export default function OurMission() {
  return (
    <Box
      sx={{
        backgroundColor: colorTheme.white,
        padding: {
          xs: "40px 20px",
          sm: "50px 30px",
          md: "50px 90px",
          lg: "70px 90px",
        },
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: fontSize.h6,
              color: colorTheme.forestShadow,
              fontWeight: "900",
              fontFamily: "'Playfair Display', serif",
              marginBottom: { xs: "16px", md: "20px" },
              textTransform: "uppercase",
            }}
          >
            Our Mission
          </Typography>
          <Typography
            sx={{
              fontSize: fontSize.p2,
              color: colorTheme.softCharcoal,
              marginBottom: { xs: "25px", md: "30px" },
              maxWidth: { xs: "350px", sm: "500px", md: "740px" },
              margin: "auto",
            }}
          >
            Whether you&apos;re furnishing a cozy apartment or a sprawling
            estate, we&apos;re here to help you find the perfect pieces to
            reflect your personality and lifestyle.
          </Typography>
        </Box>
        <Image
          style={{
            height: "100%",
            width: "100%",
            objectFit: "contain",
            maxWidth: "1200px",
          }}
          src={pngs.OurMission}
          alt="OurMission"
        />
      </Box>
    </Box>
  );
}
