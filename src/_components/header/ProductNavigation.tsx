"use client";
import React, { useState, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { colorTheme, fontSize } from "@/_utils/themes";
import Image from "next/image";
import svgs from "@/_assets/svgs";
import Dropdown from "./Dropdown";
import { DrawerMenu } from "./DrawerMenu";

// Main Component
const ProductNavigation: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // For drawer
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

  const toggleDrawer = (isOpen: boolean) => {
    setIsDrawerOpen(isOpen);
  };

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: colorTheme.forestShadow,
        paddingX: { md: "20px" },
      }}
    >
      {/* Hamburger Menu for Small Screens */}
      <Box>
        <Box
          sx={{
            padding: {
              xs: "10px 20px",
            },
            display: { xs: "block", md: "none" },
          }}
        >
          <Image
            style={{
              width: "auto",
              transform: "rotate(180deg)",
              cursor: "pointer",
            }}
            src={svgs.WhiteHamburger}
            alt="WhiteHamburger"
            onClick={() => toggleDrawer(true)}
          />
        </Box>

        {/* Desktop Navigation */}
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
            sx={{
              flex: "0 0 auto",
              fontSize: fontSize.secondaryTypography,
              color: colorTheme.cloudGray,
              cursor: "pointer",
              padding: "10px 0",
            }}
          >
            Fabric
          </Typography>
          <Typography
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
            sx={{
              flex: "0 0 auto",
              fontSize: fontSize.secondaryTypography,
              color: colorTheme.cloudGray,
              cursor: "pointer",
              padding: "10px 0",
            }}
          >
            Accesoories
          </Typography>
        </Box>
      </Box>

      {/* Drawer for Small Screens */}
      <DrawerMenu isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />

      {/* Dropdown for Larger Screens */}
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
