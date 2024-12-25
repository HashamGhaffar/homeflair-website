"use client";
import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import { colorTheme, fontSize } from "@/_utils/themes";
import pngs from "@/_assets/pngs";
import Image, { StaticImageData } from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ChristmasSpecials() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const cardData = [
    {
      image: pngs.FabricSofa1,
      title: "Lebus Upholstery",
      description: "Antigua Fabric Sofa collec ....",
      price: "$62.23",
    },
    {
      image: pngs.FabricSofa2,
      title: "Cozy Sofa",
      description: "Modern Sofa Collection ....",
      price: "$75.50",
    },
    {
      image: pngs.FabricSofa3,
      title: "Elegant Couch",
      description: "Premium Fabric Couch ....",
      price: "$85.99",
    },
    {
      image: pngs.FabricSofa4,
      title: "Classic Sofa",
      description: "Classic Sofa Designs ....",
      price: "$120.00",
    },
    {
      image: pngs.FabricSofa1,
      title: "Lebus Upholstery",
      description: "Antigua Fabric Sofa collec ....",
      price: "$62.23",
    },
    {
      image: pngs.FabricSofa2,
      title: "Cozy Sofa",
      description: "Modern Sofa Collection ....",
      price: "$75.50",
    },
    {
      image: pngs.FabricSofa3,
      title: "Elegant Couch",
      description: "Premium Fabric Couch ....",
      price: "$85.99",
    },
    {
      image: pngs.FabricSofa4,
      title: "Classic Sofa",
      description: "Classic Sofa Designs ....",
      price: "$120.00",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: colorTheme.dimAsh,
        padding: "60px 0",
        overflow: "hidden",
      }}
    >
      <Typography
        sx={{
          fontWeight: "800",
          marginBottom: "60px",
          fontFamily: "'Playfair Display', serif",
          fontSize: fontSize.h6,
          color: colorTheme.forestShadow,
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        On Your Doorstep Before Christmas
      </Typography>
      <Slider {...sliderSettings}>
        {cardData.map((item, index) => (
          <ChristmasSpecialsCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </Slider>
    </Box>
  );
}

interface ChristmasSpecialsCardProps {
  image: StaticImageData;
  title: string;
  description: string;
  price: string;
}

function ChristmasSpecialsCard({
  image,
  title,
  description,
  price,
}: ChristmasSpecialsCardProps) {
  return (
    <Box
      sx={{
        width: {
          xs: "260px",
          md: "260px",
        },
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          width: {
            xs: "260px",
            md: "260px",
          },
          overflow: "hidden",
        }}
      >
        <Image
          style={{
            height: "100%",
            width: "100%",
            objectFit: "contain",
          }}
          src={image}
          alt={title}
        />
      </Box>
      <Box
        sx={{
          "& > *:not(:last-child)": {
            paddingBottom: "10px",
          },
          paddingTop: "14px",
        }}
      >
        <Typography
          sx={{
            color: colorTheme.softSilver,
            fontSize: {
              xs: fontSize.p6,
              sm: fontSize.p5,
              md: fontSize.p5,
            },
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: colorTheme.forestShadow,
            fontSize: {
              xs: fontSize.p4,
              sm: fontSize.p3,
              md: fontSize.p3,
            },
            fontWeight: "700",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {description}
        </Typography>
        <Typography
          sx={{
            color: colorTheme.forestShadow,
            fontSize: {
              xs: fontSize.p4,
              sm: fontSize.p3,
              md: fontSize.p3,
            },
            fontWeight: "700",
          }}
        >
          {price}
        </Typography>
      </Box>
    </Box>
  );
}

export default ChristmasSpecials;
