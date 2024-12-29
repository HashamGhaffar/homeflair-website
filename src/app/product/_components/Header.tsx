"use client";
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import FilterModal from "./FilterModal";
import svgs from "@/_assets/svgs";
import { colorTheme, fontSize } from "@/_utils/themes";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: {
            xs: "40px",
            sm: "50px",
            md: "50px",
            lg: "70px",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: fontSize.h6,
            fontWeight: "700",
            fontFamily: "'Playfair Display', serif",
            color: colorTheme.forestShadow,
            textTransform: "uppercase",
            "& > span:first-of-type": {
              textDecoration: "underline",
              textDecorationThickness: {
                xs: "2px",
                sm: "3px",
                md: "4px",
              },
              textUnderlineOffset: {
                xs: "4px",
                sm: "6px",
                md: "10px",
              },
              fontSize: "inherit",
              fontWeight: "inherit",
              fontFamily: "inherit",
              color: "inherit",
            },
            "& > span:not(:first-of-type)": {
              color: colorTheme.red,
            },
          }}
        >
          <span>res</span>
          ult for &quot;
          <span>sofa</span>
          &quot;
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: "25px" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Typography
              sx={{ fontSize: fontSize.p3, color: colorTheme.forestShadow }}
            >
              Sort By
            </Typography>
            <Image
              style={{ width: "16px", height: "auto", objectFit: "contain" }}
              src={svgs.SortBy}
              alt="sort by"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
            }}
            onClick={handleOpenModal}
          >
            <Typography
              sx={{ fontSize: fontSize.p3, color: colorTheme.forestShadow }}
            >
              Filter
            </Typography>
            <Image
              style={{ width: "16px", height: "auto", objectFit: "contain" }}
              src={svgs.Filter}
              alt="filter"
            />
          </Box>
        </Box>
      </Box>

      {isModalOpen && <FilterModal onClose={handleCloseModal} />}
    </>
  );
}

export default Header;
