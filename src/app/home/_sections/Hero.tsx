"use client";
import Navbar from "@/_components/Navbar";
import { colorTheme, fontSize } from "@/_utils/themes";
import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { homeHeroSlider, homeHeroSliderSettings } from "@/_constants/home";
import FurniturePromoBox from "../_components/FurniturePromoBox";
import Image from "next/image";
import svgs from "@/_assets/svgs";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderSettings = {
    ...homeHeroSliderSettings,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    customPaging: (i: number) => (
      <Box
        sx={{
          width: "12px",
          height: "12px",
          backgroundColor: i === currentSlide ? "#ffffff" : "#FFFFFF33",
          borderRadius: "50%",
          margin: "0 5px",
        }}
      />
    ),
    appendDots: (dots: React.ReactNode[]) => (
      <Box
        sx={{
          background: "red",
          position: "relative",
        }}
      >
        <Box sx={{ position: "absolute", right: "0", bottom: "100px" }}>
          {dots}
        </Box>
      </Box>
    ),
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
  };

  return (
    <>
      <Box
        sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Navbar />
        <Grid sx={{ height: "100%", flexGrow: "1" }} container>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              background: `linear-gradient(270deg, ${colorTheme.offWhite} 0%, ${colorTheme.White} 18.32%)`,
              padding: {
                xs: "20px",
                sm: "40px",
                md: "50px",
                lg: "80px",
                xl: "120px",
              },
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                color: colorTheme.mistyBlue,
                fontSize: fontSize.headingTertiary,
              }}
            >
              Design & Comfort
            </Typography>
            <Typography
              sx={{
                color: colorTheme.forestShadow,
                fontSize: fontSize.headingPrimary,
                fontWeight: "900",
                maxWidth: "350px",
              }}
            >
              Unleashing Furniture&rsquo;s Finest
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              background: `linear-gradient(270deg, ${colorTheme.lightblue} 61.67%, ${colorTheme.darkBlue} 100%)`,
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", md: "flex-end" },
              padding: {
                xs: "20px",
                sm: "40px",
                md: "60px",
                lg: "80px",
                xl: "120px",
              },
            }}
          >
            <Box sx={{ height: "auto", maxWidth: "300px" }}>
              <Slider {...sliderSettings}>
                {homeHeroSlider.map((item, index) => (
                  <FurniturePromoBox
                    key={index}
                    text={item.text}
                    buttonText={item.buttonText}
                  />
                ))}
              </Slider>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
type ArrowProps = {
  onClick?: () => void;
  sx?: object;
};

export const RightArrow = ({ onClick, sx }: ArrowProps) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        position: "absolute",
        right: "0",
        bottom: "0",
        cursor: "pointer",
        zIndex: 2,
        width: {
          xs: "30px",
          sm: "35px",
          md: "40px",
        },
        ...sx,
      }}
    >
      <Image
        style={{
          height: "100%",
          width: "100%",
          objectFit: "contain",
        }}
        src={svgs.WhiteArrow}
        alt="arrow right"
      />
    </Box>
  );
};

export const LeftArrow = ({ onClick, sx }: ArrowProps) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        position: "absolute",
        bottom: "3px",
        right: "80px",
        transform: " rotate(180deg)",
        cursor: "pointer",
        zIndex: 2,
        width: {
          xs: "30px",
          sm: "35px",
          md: "40px",
        },
        ...sx,
      }}
    >
      <Image
        style={{
          height: "100%",
          width: "100%",
          objectFit: "contain",
        }}
        src={svgs.WhiteArrow}
        alt="arrow left"
      />
    </Box>
  );
};
