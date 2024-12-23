"use client";
import React from "react";
import { Box } from "@mui/material";
import Slider from "react-slick";
import HeroSlide from "../_components/HeroSlide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import pngs from "@/_assets/pngs";
import svgs from "@/_assets/svgs";
import FeaturesSection from "../_components/FeaturesSection";

export default function HeroHome() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3500,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <>
      <Slider {...sliderSettings}>
        <HeroSlide
          title="Frosty Season, Hot Offers"
          heading="Unleashing Furniture&rsquo;s Finest"
          description="Embrace the chill with sizzling discounts on cozy, stylish furniture to warm up your home this winter."
          bgImage="/bgFinestFurniture.png"
          imageSrc={pngs.FinestFurniture}
          headingColor="mistyBlue"
        />
        <HeroSlide
          title="Cozy Couches For Christmas"
          heading="Christmas-Ready Cozy Couches"
          description="Celebrate the season in comfort with our cozy, Christmas-ready couches."
          bgImage="/bgChristmasCozyCouches.png"
          imageSrc={pngs.ChristmasCozyCouches}
          headingColor="SeaGreen"
        />
        <HeroSlide
          title="Season&rsquo;s Final Savings"
          heading="Couches Made for your comfort"
          description="Don&rsquo;t miss your last chance to save big this season!"
          bgImage="/bgComfortCouches.png"
          imageSrc={pngs.ComfortCouches}
          headingColor="goldenYellow"
        />
      </Slider>
      <FeaturesSection />
    </>
  );
}

function PrevArrow({ onClick }: { onClick?: () => void }) {
  return (
    <Box
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        left: "10px",
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
        right: "10px",
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
