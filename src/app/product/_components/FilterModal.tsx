"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { colorTheme, fontSize } from "@/_utils/themes";

export default function FilterModal({ onClose }: { onClose: () => void }) {
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
    "furniture" | "type" | "material",
    { label: string }[]
  > = {
    furniture: [
      { label: "Sofa" },
      { label: "Chair" },
      { label: "Electric Patio Heaters" },
      { label: "Parasols & Base" },
      { label: "Cushion Storage Box" },
      { label: "Furniture Cover" },
    ],
    type: [
      { label: "Buoyant" },
      { label: "Designer Fabric" },
      { label: "La-Z-Boy" },
      { label: "Red Rose" },
    ],
    material: [
      { label: "Asra Earth" },
      { label: "Blakely Charcoal" },
      { label: "Blakely Ivory" },
      { label: "Blakely Mist" },
    ],
  };

  return (
    <>
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
        {(Object.keys(filterOptions) as (keyof typeof filterOptions)[]).map(
          (category, index) => (
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
                {filterOptions[category].map((option, idx) => (
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
      </Box>
    </>
  );
}
