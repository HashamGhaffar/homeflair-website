"use client";
import React, { useState, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { colorTheme, fontSize } from "@/_utils/themes";
// import Image from "next/image";
// import svgs from "@/_assets/svgs";
import Dropdown from "./Dropdown";

const ProductNavigation: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (category: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(category);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: colorTheme.forestShadow,
        paddingX: { md: "20px" },
      }}
    >
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: { xs: "none", md: "center" },
          gap: { xs: "20px", sm: "30px" },
          overflowX: "auto",
          whiteSpace: "nowrap",
          width: "100%",
          boxSizing: "border-box",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        <Typography
          onClick={() => handleMouseEnter("All sofas")}
          sx={{
            flex: "0 0 auto",
            fontSize: fontSize.secondaryTypography,
            color: colorTheme.cloudGray,
            cursor: "pointer",
            padding: "10px 0",
          }}
        >
          All sofas
        </Typography>
        <Typography
          onClick={() => handleMouseEnter("Fabric sofas")}
          sx={{
            flex: "0 0 auto",
            fontSize: fontSize.secondaryTypography,
            color: colorTheme.cloudGray,
            cursor: "pointer",
            padding: "10px 0",
          }}
        >
          Fabric sofas
        </Typography>
        <Typography
          onClick={() => handleMouseEnter("Corner sofas")}
          sx={{
            flex: "0 0 auto",
            fontSize: fontSize.secondaryTypography,
            color: colorTheme.cloudGray,
            cursor: "pointer",
            padding: "10px 0",
          }}
        >
          Corner sofas
        </Typography>
        <Typography
          onClick={() => handleMouseEnter("Leather sofas")}
          sx={{
            flex: "0 0 auto",
            fontSize: fontSize.secondaryTypography,
            color: colorTheme.cloudGray,
            cursor: "pointer",
            padding: "10px 0",
          }}
        >
          Leather sofas
        </Typography>
        <Typography
          onClick={() => handleMouseEnter("Chair")}
          sx={{
            flex: "0 0 auto",
            fontSize: fontSize.secondaryTypography,
            color: colorTheme.cloudGray,
            cursor: "pointer",
            padding: "10px 0",
          }}
        >
          Chair
        </Typography>
        <Typography
          onClick={() => handleMouseEnter("Quick delivery")}
          sx={{
            flex: "0 0 auto",
            fontSize: fontSize.secondaryTypography,
            color: colorTheme.cloudGray,
            cursor: "pointer",
            padding: "10px 0",
          }}
        >
          Quick delivery
        </Typography>
        <Typography
          onClick={() => handleMouseEnter("Accessories")}
          sx={{
            flex: "0 0 auto",
            fontSize: fontSize.secondaryTypography,
            color: colorTheme.cloudGray,
            cursor: "pointer",
            padding: "10px 0",
          }}
        >
          Accessories
        </Typography>
      </Box>

      {activeDropdown && (
        <Dropdown
          category={activeDropdown}
          onMouseEnter={() => {
            if (closeTimeoutRef.current) {
              clearTimeout(closeTimeoutRef.current);
              closeTimeoutRef.current = null;
            }
          }}
          onMouseLeave={handleMouseLeave}
        />
      )}
    </Box>
  );
};

export default ProductNavigation;
