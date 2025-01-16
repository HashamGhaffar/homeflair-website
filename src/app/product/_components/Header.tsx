"use client";
import React, { useState, useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import FilterModal from "./FilterModal";
import SortByDropdown from "./SortByDropdown";
import svgs from "@/_assets/svgs";
import { colorTheme, fontSize } from "@/_utils/themes";
import { FilterState } from "../_sections/RezultForItem";

interface HeaderProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  applyFilters: () => void;
}

function Header({ filters, setFilters, applyFilters }: HeaderProps) {
  const [isSortByOpen, setIsSortByOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleSortByDropdown = () => {
    setIsSortByOpen((prev) => !prev);
  };

  const handleOpenFilterModal = () => {
    setIsFilterModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseFilterModal = () => {
    setIsFilterModalOpen(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsSortByOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
          <Box
            ref={dropdownRef}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              position: "relative",
              cursor: "pointer",
            }}
            onClick={toggleSortByDropdown}
          >
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
            {isSortByOpen && (
              <SortByDropdown onClick={(e) => e.stopPropagation()} />
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
            }}
            onClick={handleOpenFilterModal}
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

      {isFilterModalOpen && (
        <FilterModal
          onClose={handleCloseFilterModal}
          filters={filters}
          setFilters={setFilters}
          applyFilters={applyFilters}
        />
      )}
    </>
  );
}

export default Header;
