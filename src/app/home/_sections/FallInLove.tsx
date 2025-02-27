"use client";
import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import "slick-carousel/slick/slick.css";
import { colorTheme, fontSize } from "@/_utils/themes";
import pngs from "@/_assets/pngs";
import Image from "next/image";

const gridItems = [
  {
    imageSrc: pngs.BlueWingback,
    label: "red rose sofas",
  },
  {
    imageSrc: pngs.BuoyantUpholstery,
    label: "Buoyant Upholstery",
  },
  {
    imageSrc: pngs.LebusUpholstery,
    label: "Lebus Upholstery",
  },
];

export default function FallInLove(): JSX.Element {
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
        Take a seat, fall in love instantly.
      </Typography>
      <Grid
        sx={{
          paddingTop: {
            xs: "30px",
            sm: "60px",
          },
          maxWidth: "1440px",
          margin: "auto",
          gap: { xs: "32px", lg: "0" },
        }}
        container
      >
        {gridItems.map((item, index) => (
          <Grid key={index} item xs={12} lg={4} xl={4}>
            <Box
              onClick={() => {}}
              sx={{
                maxWidth: { xs: "400px", md: "450px", lg: "480px" },
                height: { xs: "auto", lg: "398px" },
                position: "relative",
                margin: "auto",
                overflow: "hidden",
                cursor: "pointer",
                "& > :first-child": {
                  transition: "transform 0.4s ease",
                },
                "&:hover > :first-child": {
                  transform: "scale(1.08)",
                },
              }}
            >
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                src={item.imageSrc}
                alt={item.label}
              />
              <Typography
                sx={{
                  padding: "5px 10px",
                  backgroundColor: colorTheme.shadowGrey,
                  color: colorTheme.white,
                  position: "absolute",
                  top: { xs: "14px", md: "20px" },
                  left: { xs: "14px", md: "20px" },
                  fontSize: fontSize.p1,
                  textTransform: "uppercase",
                }}
              >
                {item.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
