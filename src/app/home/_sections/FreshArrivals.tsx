"use client";
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { colorTheme, fontSize } from "@/_utils/themes";
import CustomButton from "@/_components/Button";
import Image, { StaticImageData } from "next/image";
import { Product } from "@/types/product";

export default function FreshArrivals({
  products,
}: {
  products: Product[];
}): JSX.Element {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Grid
      sx={{
        paddingY: {
          xs: "30px",
          sm: "60px",
        },
        backgroundColor: colorTheme.pureFog,
      }}
      container
    >
      <Grid
        sx={{
          paddingX: {
            xs: "30px",
            sm: "60px",
            lg: "100px",
          },
          display: "flex",
          alignItems: "center",
          order: {
            xs: 2,
            md: 1,
          },
          marginTop: { xs: "40px", sm: "80px", md: "0" },
        }}
        item
        xs={12}
        md={4}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: "20px", sm: "30px" },
            width: { xs: "100%", md: "auto" },
          }}
        >
          <Typography
            sx={{
              fontSize: fontSize.h6,
              fontWeight: "800",
              fontFamily: "'Playfair Display', serif",
              color: colorTheme.forestShadow,
              textTransform: "uppercase",
            }}
          >
            Fresh Arrivals Await
          </Typography>
          <Typography
            sx={{
              fontSize: fontSize.p3,
              color: colorTheme.muddyMossGray,
            }}
          >
            Get the latest items immediately with promo prices
          </Typography>
          <Box>
            <CustomButton text="Shop Now" />
          </Box>
        </Box>
      </Grid>
      <Grid
        sx={{
          order: {
            xs: 1,
            md: 2,
          },
        }}
        item
        xs={12}
        md={8}
      >
        <Slider {...sliderSettings}>
          {products.map((card, index) => (
            <FreshArrivalsCard
              key={index}
              imageSrc={card.mainImage}
              altText={card.name}
              description={card.shortDescription}
            />
          ))}
        </Slider>
      </Grid>
    </Grid>
  );
}

interface FreshArrivalsCardProps {
  imageSrc: string | StaticImageData;
  altText: string;
  description: string;
}

function FreshArrivalsCard({
  imageSrc,
  altText,
  description,
}: FreshArrivalsCardProps): JSX.Element {
  return (
    <Box
      sx={{
        position: "relative",
        height: "400px",
        width: "265px",
        overflow: "hidden",
        margin: "auto",
      }}
    >
      <Box sx={{ height: "400px", width: "265px" }}>
        <Image
          src={imageSrc}
          alt={altText}
          width={265}
          height={400}
          style={{
            objectFit: "cover",
          }}
        />
      </Box>
      <Box
        sx={{
          backgroundColor: colorTheme.transparentGrey,
          position: "absolute",
          bottom: "0px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            padding: "5px",
            color: colorTheme.white,
            fontSize: fontSize.p3,
            width: "100%",
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
}
