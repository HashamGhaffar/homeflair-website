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
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { colorTheme, fontSize } from "@/_utils/themes";
import { FilterState } from "../_sections/RezultForItem";

interface FilterModalProps {
  onClose: () => void;
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  applyFilters: () => void;
}

function ColorLabel({ color, label }: { color: string; label: string }) {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Box
        sx={{
          width: "20px",
          height: "20px",
          backgroundColor: color,
        }}
      />
      <Typography variant="body2" sx={{ fontSize: fontSize.p3 }}>
        {label}
      </Typography>
    </Box>
  );
}

export default function FilterModal({
  onClose,
  filters,
  setFilters,
  applyFilters,
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
    "furniture" | "seaters" | "material" | "colour" | "brand",
    { label: string | React.ReactNode; value: string }[]
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

    colour: [
      {
        label: <ColorLabel color={colorTheme.choiceYellow} label="Yellow" />,
        value: colorTheme.choiceYellow,
      },
      {
        label: <ColorLabel color={colorTheme.choiceWhite} label="White" />,
        value: colorTheme.choiceWhite,
      },
      {
        label: <ColorLabel color={colorTheme.choiceGrey} label="Grey" />,
        value: colorTheme.choiceGrey,
      },
      {
        label: <ColorLabel color={colorTheme.choiceBlue} label="Blue" />,
        value: colorTheme.choiceBlue,
      },
      {
        label: (
          <ColorLabel color={colorTheme.choiceCharcoal} label="Charcoal" />
        ),
        value: colorTheme.choiceCharcoal,
      },

      {
        label: (
          <ColorLabel color={colorTheme.choiceLightBlue} label="Light Blue" />
        ),
        value: colorTheme.choiceLightBlue,
      },
      {
        label: <ColorLabel color={colorTheme.choiceGreen} label="Green" />,
        value: colorTheme.choiceGreen,
      },
      {
        label: (
          <ColorLabel color={colorTheme.choiceSoftGrey} label="Soft Grey" />
        ),
        value: colorTheme.choiceSoftGrey,
      },
      {
        label: (
          <ColorLabel color={colorTheme.choiceDarkBlue} label="Dark Blue" />
        ),
        value: colorTheme.choiceDarkBlue,
      },
      {
        label: <ColorLabel color={colorTheme.choicePink} label="Pink" />,
        value: colorTheme.choicePink,
      },
      {
        label: (
          <ColorLabel
            color={colorTheme.choiceDarkCharcoal}
            label="Dark Charcoal"
          />
        ),
        value: colorTheme.choiceDarkCharcoal,
      },
    ],
    brand: [
      { label: "Buoyant", value: "Buoyant" },
      { label: "Designer Fabric", value: "Designer Fabric" },
      { label: "La-Z-Boy", value: "La-Z-Boy" },
      { label: "Red Rose", value: "Red Rose" },
      { label: "Other", value: "Other" },
    ],
  };

  // ✅ Handle Checkbox Changes
  const handleCheckboxChange = (
    category: keyof Omit<FilterState, "priceRange" | "deliveryTime">,
    value: string
  ) => {
    setFilters((prevFilters) => {
      const currentValues = prevFilters[category];

      const updatedCategory = currentValues.includes(value)
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value];

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
          (category, index) => (
            <Accordion
              key={index}
              sx={{
                boxShadow: "none",
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
            borderBottom: `2px solid ${colorTheme.dimAsh}`,
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
              sx={{ color: colorTheme.red }}
            />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>£{filters.priceRange[0]}</Typography>
              <Typography>£{filters.priceRange[1]}</Typography>
            </Box>
          </AccordionDetails>
        </Accordion>

        <Button
          variant="contained"
          sx={{
            marginTop: "20px",
            width: "100%",
            backgroundColor: colorTheme.red,
            color: colorTheme.white,
            fontWeight: "600",
            "&:hover": {
              backgroundColor: colorTheme.forestShadow,
            },
          }}
          onClick={() => {
            applyFilters();
            handleClose();
          }}
        >
          Apply Filters
        </Button>
      </Box>
    </>
  );
}
