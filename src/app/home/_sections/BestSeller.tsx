"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { colorTheme, fontSize } from "@/_utils/themes";
import {
  FreshArrivalsCard,
  FreshArrivalsCardProps,
} from "../_components/ProductCardsComponents";
import pngs from "@/_assets/pngs";
import { LastSavingItems } from "../_components/LastSavingItems";

const cardData: FreshArrivalsCardProps[] = [
  {
    imageSrc: pngs.BlueVelvetSofa,
    productName: "Red Rose Sofas",
    details: "Bespoke Winchester Fabric ....",
    price: "$62.23",
  },
  {
    imageSrc: pngs.BlueVelvetSofa,
    productName: "Red Rose Sofas",
    details: "Bespoke Winchester Fabric ....",
    price: "$62.23",
  },
  {
    imageSrc: pngs.BlueVelvetSofa,
    productName: "Red Rose Sofas",
    details: "Bespoke Winchester Fabric ....",
    price: "$62.23",
  },
  {
    imageSrc: pngs.BlueVelvetSofa,
    productName: "Red Rose Sofas",
    details: "Bespoke Winchester Fabric ....",
    price: "$62.23",
  },
];

export default function LastSavings(): JSX.Element {
  const sliderSettings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
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
        }}
      >
        Last Chance Savings
      </Typography>
      <LastSavingItems />

      <Box>
        <Slider {...sliderSettings}>
          {cardData.map((card, index) => (
            <FreshArrivalsCard
              key={index}
              imageSrc={card.imageSrc}
              productName={card.productName}
              details={card.details}
              price={card.price}
            />
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
