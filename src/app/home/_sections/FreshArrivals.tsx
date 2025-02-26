"use client";
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { colorTheme, fontSize } from "@/_utils/themes";
import CustomButton from "@/_components/Button";
import Image, { StaticImageData } from "next/image";
import { Product } from "@/types/product";
import { useRouter } from "next/navigation";

export default function FreshArrivals({
  products,
}: {
  products: Product[];
}): JSX.Element {
  const sliderSettings = {
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrow: false,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1200,
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

  const router = useRouter();
  return (
    <Box
      sx={{
        paddingY: {
          xs: "30px",
          sm: "60px",
        },
        backgroundColor: colorTheme.pureFog,
        // maxWidth: "1440px",
        // margin: "auto",
      }}
    >
      <Grid
        sx={{
          maxWidth: "1440px",
          margin: "auto",
        }}
        container
      >
        <Grid
          sx={{
            paddingX: {
              xs: "30px",
              sm: "50px",
              lg: "60px",
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
          md={3}
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
              <CustomButton
                onClick={() => router.push("/product")}
                text="Shop Now"
              />
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
          md={9}
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
    </Box>
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
