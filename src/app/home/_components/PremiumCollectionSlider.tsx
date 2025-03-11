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
  speed: 800,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1536,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 1200,
      settings: { speed: 500, slidesToShow: 3, slidesToScroll: 1 },
    },
    {
      breakpoint: 900,
      settings: { speed: 500, slidesToShow: 2, slidesToScroll: 1 },
    },
    {
      breakpoint: 600,
      settings: { speed: 500, slidesToShow: 1, slidesToScroll: 1 },
    },
  ],
};

export default function PremiumCollectionSlider({
  products,
  setSelectedProduct,
  selectedProduct,
}: {
  products: Product[];
  setSelectedProduct: React.Dispatch<React.SetStateAction<Product | null>>;
  selectedProduct: Product | null;
}): JSX.Element {
  return (
    <Slider {...sliderSettings}>
      {products.map((card: Product, index) => (
        <PremiumCollectionCard
          key={index}
          imageSrc={card.mainImage}
          productName={
            typeof card.category === "string"
              ? card.category
              : card.category.name
          }
          details={card.name}
          price={formatPrice(card.price)}
          isSelected={card._id === selectedProduct?._id}
          setSelectedProduct={setSelectedProduct}
          product={card}
        />
      ))}
    </Slider>
  );
}

export interface PremiumCollectionCardProps {
  product: Product;
  imageSrc: string | StaticImageData;
  productName: string;
  details: string;
  price: string;
  isSelected?: boolean;
  setSelectedProduct?: React.Dispatch<React.SetStateAction<Product | null>>;
}
export function PremiumCollectionCard({
  product,
  imageSrc,
  productName,
  details,
  price,
  isSelected = false,
  setSelectedProduct = () => {},
}: PremiumCollectionCardProps): JSX.Element {
  return (
    <Box sx={{ paddingY: "20px" }}>
      <Box
        onClick={() => setSelectedProduct(product)}
        sx={{
          width: { xs: "240px", sm: "290px" },
          overflow: "hidden",
          margin: "auto",
          color: colorTheme.red,
          boxShadow: isSelected ? "0px 4px 20px 0px #00000040" : "none",
          outlineOffset: "5px",
          position: "relative",
          cursor: "pointer",
          transition: "transform 0.3s ease-in-out",
          padding: "10px",
          "&:hover": {
            transform: "scale(1.03)",
          },
        }}
      >
        {/* Product Image */}
        <Box
          sx={{
            height: { xs: "219.31px", sm: "265px" },
            maxWidth: { xs: "240px", sm: "290px" },
            width: "100%",
            marginBottom: { xs: "10px", sm: "18px" },
            overflow: "hidden",
            "&:first-child": {},
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

        {/* Product Details */}
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
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
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
    </Box>
  );
}
