"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image, { StaticImageData } from "next/image";
import { colorTheme, fontSize } from "@/_utils/themes";
import { Product } from "@/types/product";
import { formatPrice } from "@/_utils/helpers";

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

export default function PremiumCollectionSlider({
  products,
}: {
  products: Product[];
}): JSX.Element {
  return (
    <Slider {...sliderSettings}>
      {products.map((card, index) => (
        <PremiumCollectionCard
          key={index}
          imageSrc={card.mainImage}
          productName={card.name}
          details={card.shortDescription}
          price={formatPrice(card.price)}
        />
      ))}
    </Slider>
  );
}

export interface PremiumCollectionCardProps {
  imageSrc: string | StaticImageData;
  productName: string;
  details: string;
  price: string;
}

export function PremiumCollectionCard({
  imageSrc,
  productName,
  details,
  price,
}: PremiumCollectionCardProps): JSX.Element {
  return (
    <Box
      sx={{
        width: { xs: "240px", sm: "290px" },
        overflow: "hidden",
        margin: "auto",
        color: colorTheme.red,
      }}
    >
      <Box
        sx={{
          height: { xs: "219.31px", sm: "265px" },
          width: { xs: "240px", sm: "290px" },
          marginBottom: { xs: "10px", sm: "18px" },
        }}
      >
        <Image
          style={{
            objectFit: "contain",
          }}
          width={290}
          height={265}
          src={imageSrc}
          alt="product image"
        />
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: fontSize.p5,
            color: colorTheme.softSilver,
          }}
        >
          {productName}
        </Typography>
        <Typography
          sx={{
            fontSize: fontSize.p3,
            color: colorTheme.darkCharcoal,
            fontWeight: "700",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {details}
        </Typography>
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: fontSize.p3,
            color: colorTheme.forestShadow,
          }}
        >
          {price}
        </Typography>
      </Box>
    </Box>
  );
}
