"use client";
import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import { colorTheme, fontSize } from "@/_utils/themes";
import Image, { StaticImageData } from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Product } from "@/types/product";
import { formatPrice } from "@/_utils/helpers";
import { useRouter } from "next/navigation";

function ChristmasSpecials({ products }: { products: Product[] }) {
  const router = useRouter();

  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 800,
    slidesToShow: 5,
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
        settings: {
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        backgroundColor: colorTheme.dimAsh,
        padding: "60px 0",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          margin: "auto",
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
            paddingX: "20px",
          }}
        >
          On Your Doorstep Before Christmas
        </Typography>
        <Slider {...sliderSettings}>
          {products.map((item, index) => (
            <ChristmasSpecialsCard
              key={index}
              image={item.mainImage}
              title={item.name}
              description={item.shortDescription}
              price={formatPrice(item.price)}
              onClick={() => {
                router.push(`/product/${item.slug}`);
              }}
            />
          ))}
        </Slider>
      </Box>
    </Box>
  );
}

interface ChristmasSpecialsCardProps {
  image: StaticImageData | string;
  title: string;
  description: string;
  price: string | number;
  onClick?: () => void;
}

function ChristmasSpecialsCard({
  image,
  title,
  description,
  price,
  onClick = () => {},
}: ChristmasSpecialsCardProps) {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: {
          xs: "260px",
          md: "260px",
        },
        margin: "0 auto",
        cursor: "pointer",
        "&:hover": {
          transform: "scale(1.02)",
          transition: "transform 0.3s ease-in-out",
        },
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
          src={image}
          alt={title}
          width={260}
          height={260}
          style={{
            objectFit: "cover",
          }}
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
