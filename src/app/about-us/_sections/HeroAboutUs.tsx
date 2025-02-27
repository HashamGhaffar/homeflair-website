"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { colorTheme, fontSize } from "@/_utils/themes";
import Image from "next/image";
import pngs from "@/_assets/pngs";

export default function HeroAboutUs() {
  return (
    <Box
      sx={{
        background: `linear-gradient(90deg, ${colorTheme.softWhite} 0%, ${colorTheme.lightSilver} 100%)`,
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
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
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
            src={pngs.HeroAboutUs}
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
            textAlign: { xs: "left", md: "right" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: { xs: "flex-start", md: "flex-end" },
            gap: "16px",
          }}
        >
          <Typography
            sx={{
              fontSize: fontSize.h6,
              color: colorTheme.softCharcoal,
            }}
          >
            Antigua Fabric Sofa Collection
          </Typography>

          <Typography
            sx={{
              fontSize: fontSize.h2,
              color: colorTheme.forestShadow,
              fontWeight: "900",
              fontFamily: "'Playfair Display', serif",
              maxWidth: "300px",
            }}
          >
            Unleashing Furniture&#8217;s Finest
          </Typography>

          <Typography
            sx={{
              fontSize: fontSize.h4,
              color: colorTheme.red,
              fontWeight: "500",
              fontFamily: "'Dancing Script', cursive",
            }}
          >
            Design & Comfort
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
