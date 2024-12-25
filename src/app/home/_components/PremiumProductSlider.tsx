"use client";
import React from "react";
import Slider from "react-slick";
import { Box, Typography, Grid } from "@mui/material";
import Image from "next/image";
import { colorTheme, fontSize } from "@/_utils/themes";
import pngs from "@/_assets/pngs";
import svgs from "@/_assets/svgs"; // Ensure this path is correct for your SVG

export default function PremiumProductSlider() {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const sliderItems = [
    {
      image: pngs.PremiumItem1,
      title: "Lebus Upholstery",
      subtitle: "ANTIGUA FABRIC SOFA COLLECTION",
      description:
        "The Antigua Fabric Sofa is the optima of elegance. Arriving in a rich velvet fabric with a variety of jewel-like colours to choose from, this fabric sofa stands proudly in any living space.",
    },
    {
      image: pngs.PremiumItem1,
      title: "Lebus Upholstery",
      subtitle: "ANTIGUA FABRIC SOFA COLLECTION",
      description:
        "The Antigua Fabric Sofa is the optima of elegance. Arriving in a rich velvet fabric with a variety of jewel-like colours to choose from, this fabric sofa stands proudly in any living space.",
    },
  ];

  return (
    <Box
      sx={{
        maxWidth: "1000px",
        margin: "auto",
      }}
    >
      <Slider {...sliderSettings}>
        {sliderItems.map((item, index) => (
          <Box key={index}>
            <Grid container spacing={4} alignItems="center">
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    width: "381.73px",
                    height: "292.92px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  sx={{
                    color: colorTheme.white,
                    fontSize: fontSize.p4,
                    fontWeight: "600",
                    marginBottom: "10px",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    color: colorTheme.red,
                    fontSize: fontSize.h6,
                    fontWeight: "700",
                    marginBottom: "20px",
                    maxWidth: "300px",
                    lineHeight: "24px",
                  }}
                >
                  {item.subtitle}
                </Typography>
                <Typography
                  sx={{
                    color: colorTheme.smokeWhite,
                    fontSize: fontSize.p3,
                    lineHeight: "1.6",
                  }}
                >
                  {item.description}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

function PrevArrow({ onClick }: { onClick?: () => void }) {
  return (
    <Box
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        left: { xs: "-10px", md: "0px", lg: "-80px" },
        transform: "translateY(-50%) rotate(180deg)",
        zIndex: 1,
        cursor: "pointer",
        width: {
          xs: "30px",
          md: "50px",
          lg: "60px",
        },
      }}
    >
      <Image
        style={{ height: "100%", width: "100%", objectFit: "contain" }}
        src={svgs.SliderArrow}
        alt="Previous"
        width={30}
        height={30}
      />
    </Box>
  );
}

function NextArrow({ onClick }: { onClick?: () => void }) {
  return (
    <Box
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        right: { xs: "-10px", md: "0px", lg: "-80px" },
        transform: "translateY(-50%)",
        zIndex: 1,
        cursor: "pointer",
        width: {
          xs: "30px",
          md: "50px",
          lg: "60px",
        },
      }}
    >
      <Image
        style={{ height: "100%", width: "100%", objectFit: "contain" }}
        src={svgs.SliderArrow}
        alt="Next"
        width={30}
        height={30}
      />
    </Box>
  );
}
