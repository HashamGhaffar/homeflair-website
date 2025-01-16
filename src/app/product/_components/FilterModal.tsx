"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  Slider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { colorTheme, fontSize } from "@/_utils/themes";
import { FilterState } from "../_sections/RezultForItem";

interface FilterModalProps {
  onClose: () => void;
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}

export default function FilterModal({
  onClose,
  filters,
  setFilters,
}: FilterModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsAnimating(false);
      onClose();
    }, 500);
  };

  if (!isAnimating) return null;

  const filterOptions: Record<
    "furniture" | "seaters" | "material",
    { label: string; value: string }[]
  > = {
    furniture: [
      { label: "Sofas", value: "Sofas" },
      { label: "Chairs", value: "Chairs" },
      { label: "Accessories", value: "Accessories" },
      { label: "Tables", value: "Tables" },
      { label: "Garden Furniture", value: "Garden Furniture" },
    ],
    seaters: [
      { label: "2 Seaters sofas", value: "2 Seaters sofas" },
      { label: "3 Seaters sofas", value: "3 Seaters sofas" },
      { label: "4 Seaters sofas", value: "4 Seaters sofas" },
      { label: "Corner sofas", value: "Corner sofas" },
      { label: "Chairs", value: "Chairs" },
      { label: "Footstools", value: "Footstools" },
    ],
    material: [
      { label: "Fabric Sofas", value: "Fabric Sofas" },
      { label: "Leather Sofas", value: "Leather Sofas" },
      { label: "Fabric Chair", value: "Fabric Chair" },
    ],
  };

  // ✅ Handle Checkbox Changes
  const handleCheckboxChange = (
    category: keyof Omit<FilterState, "priceRange">, // Exclude priceRange
    value: string
  ) => {
    setFilters((prevFilters) => {
      const currentValues = prevFilters[category];

      const updatedCategory = currentValues.includes(value)
        ? currentValues.filter((item) => item !== value) // Remove if exists
        : [...currentValues, value]; // Add if not exists

      return {
        ...prevFilters,
        [category]: updatedCategory,
      };
    });
  };

  // ✅ Handle Price Range Changes
  const handlePriceChange = (_: Event, newValue: number | number[]) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      priceRange: newValue as number[],
    }));
  };

  return (
    <>
      {/* Overlay */}
      <Box
        onClick={handleClose}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          transition: "opacity 0.5s ease",
          opacity: isVisible ? 1 : 0,
          backgroundColor: colorTheme.transparentBlack,
          zIndex: 1000,
        }}
      />

      {/* Filter Panel */}
      <Box
        sx={{
          position: "fixed",
          top: "0",
          left: isVisible ? "0" : "-300px",
          width: { xs: "250px", md: "300px" },
          height: "100vh",
          overflowY: "auto",
          backgroundColor: colorTheme.white,
          zIndex: 1001,
          padding: "20px",
          transition: "left 0.5s ease",
        }}
      >
        {/* Dynamic Filter Options */}
        {(Object.keys(filterOptions) as (keyof typeof filterOptions)[]).map(
          (category: "seaters" | "furniture" | "material", index) => (
            <Accordion
              key={index}
              sx={{
                boxShadow: "none",
                backgroundColor: "none",
                borderBottom: `2px solid ${colorTheme.dimAsh}`,
                borderRadius: "0px",
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon sx={{ color: colorTheme.forestShadow }} />
                }
              >
                <Typography
                  sx={{
                    color: colorTheme.forestShadow,
                    fontSize: fontSize.p2,
                    fontWeight: "700",
                    textTransform: "capitalize",
                  }}
                >
                  {category}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {filterOptions[category]?.map((option, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "10px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: fontSize.p3,
                        color: colorTheme.softCharcoal,
                      }}
                    >
                      {option.label}
                    </Typography>
                    <Checkbox
                      checked={filters[category]?.includes(option.value)}
                      onChange={() =>
                        handleCheckboxChange(category, option.value)
                      }
                      sx={{
                        color: colorTheme.SoftAsh,
                        "&.Mui-checked": {
                          color: colorTheme.red,
                        },
                      }}
                    />
                  </Box>
                ))}
              </AccordionDetails>
            </Accordion>
          )
        )}

        {/* ✅ Price Range Filter */}
        <Accordion
          sx={{
            boxShadow: "none",
            backgroundColor: "none",
            borderBottom: `2px solid ${colorTheme.dimAsh}`,
            borderRadius: "0px",
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon sx={{ color: colorTheme.forestShadow }} />
            }
          >
            <Typography
              sx={{
                color: colorTheme.forestShadow,
                fontSize: fontSize.p2,
                fontWeight: "700",
              }}
            >
              Price Range
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Slider
              value={filters.priceRange}
              onChange={handlePriceChange}
              valueLabelDisplay="auto"
              min={0}
              max={10000}
              sx={{
                color: colorTheme.red,
              }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
              }}
            >
              <Typography>£{filters.priceRange[0]}</Typography>
              <Typography>£{filters.priceRange[1]}</Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
}
