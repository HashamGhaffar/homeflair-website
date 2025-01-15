"use client";
import React from "react";
import Slider from "react-slick";
import { Box, Typography, Grid } from "@mui/material";
import Image from "next/image";
import { colorTheme, fontSize } from "@/_utils/themes";
import svgs from "@/_assets/svgs";
import { Product } from "@/types/product";

export default function PremiumProductSlider({
  products,
}: {
  products: Product[];
}) {
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

  return (
    <Box
      sx={{
        maxWidth: "1000px",
        margin: "auto",
      }}
    >
      <Slider {...sliderSettings}>
        {products.map((item: Product, index) => (
          <Box sx={{ textAlign: { xs: "center", md: "left" } }} key={index}>
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
                    src={item.mainImage}
                    alt={item.name}
                    width={381.73}
                    height={292.92}
                    style={{
                      objectFit: "cover",
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
                  {item.subcategory
                    .map((subcategory) =>
                      typeof subcategory === "string"
                        ? subcategory
                        : subcategory.name
                    )
                    .join(", ")}
                </Typography>
                {/* <Box> */}
                <Typography
                  sx={{
                    color: colorTheme.red,
                    fontSize: fontSize.h6,
                    fontWeight: "700",
                    marginBottom: "20px",
                    maxWidth: { xs: "300px", sm: "380px", md: "300px" },
                    lineHeight: "24px",
                    margin: { xs: "auto", md: "0px" },
                  }}
                >
                  {item.name}
                </Typography>
                {/* </Box> */}
                <Typography
                  sx={{
                    color: colorTheme.smokeWhite,
                    fontSize: fontSize.p3,
                    lineHeight: "1.6",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {item.shortDescription}
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
