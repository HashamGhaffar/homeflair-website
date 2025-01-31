"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import MUIButton from "@mui/material/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { colorTheme, fontSize } from "@/_utils/themes";
import Image, { StaticImageData } from "next/image";
import { Product } from "@/types/product";
import { formatPrice } from "@/_utils/helpers";

export default function LastSavings({
  products,
}: {
  products: Product[];
}): JSX.Element {
  const sliderSettings = {
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: { speed: 500, slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 600,
        settings: { speed: 500, slidesToShow: 1, slidesToScroll: 1 },
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
        paddingX: { xs: "10px", sm: "0" },
        backgroundColor: colorTheme.red,
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          color: colorTheme.white,
          fontSize: fontSize.h6,
          width: "100%",
          fontFamily: "'Playfair Display', serif",
          paddingBottom: {
            xs: "30px",
            sm: "60px",
          },
          textTransform: "uppercase",
          fontWeight: "800",
        }}
      >
        Last Chance Savings
      </Typography>
      <Box>
        <Slider {...sliderSettings}>
          {products.map((card, index) => (
            <FreshArrivalsCard
              key={index}
              imageSrc={card.mainImage}
              productName={card.name}
              details={card.subcategory.map((item) => item).join(", ")}
              currentPrice={formatPrice(
                card.price - (card.discount / 100) * card.price
              )}
              originalPrice={formatPrice(card.price)}
              buttonText={"Shop"}
            />
          ))}
        </Slider>
      </Box>
    </Box>
  );
}

interface FreshArrivalsCardProps {
  imageSrc: string | StaticImageData;
  productName: string;
  details: string;
  currentPrice: string;
  originalPrice: string;
  buttonText: string;
}

function FreshArrivalsCard({
  imageSrc,
  productName,
  details,
  currentPrice,
  originalPrice,
  buttonText,
}: FreshArrivalsCardProps): JSX.Element {
  return (
    <Box
      sx={{
        width: { xs: "240px", sm: "290px" },
        overflow: "hidden",
        margin: "auto",
        color: colorTheme.white,
      }}
    >
      <Box
        sx={{
          height: { xs: "219.31px", sm: "265px" },
          width: { xs: "240px", sm: "290px" },
          marginBottom: { xs: "10px", sm: "18px" },
          overflow: "hidden",
          "&:first-child": {
            objectFit: { xs: "contain !important", sm: "cover" },
          },
        }}
      >
        <Image
          style={{
            objectFit: "cover",
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
            fontWeight: "700",
            fontSize: fontSize.p5,
          }}
        >
          {productName}
        </Typography>
        <Typography
          sx={{
            fontSize: fontSize.p6,
          }}
        >
          {details}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginTop: { xs: "8px", sm: "12px" },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "flex-end", gap: "8px" }}>
            <Typography
              sx={{
                fontWeight: "900",
                fontSize: fontSize.p1,
              }}
            >
              {currentPrice}
            </Typography>
            <Typography
              sx={{
                fontSize: fontSize.p3,
                textDecoration: "line-through",
              }}
            >
              {originalPrice}
            </Typography>
          </Box>
          <MUIButton
            sx={{
              padding: "10px 20px",
              borderRadius: "12px",
              backgroundColor: colorTheme.white,
              color: colorTheme.red,
              border: `2px solid ${colorTheme.red}`,
              textTransform: "none",
              fontSize: fontSize.p3,
              fontWeight: "600",
              "&:hover": {
                backgroundColor: colorTheme.red,
                color: colorTheme.white,
              },
            }}
          >
            {buttonText}
          </MUIButton>
        </Box>
      </Box>
    </Box>
  );
}
