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

  const textStyles = {
    flex: "0 0 auto",
    fontSize: fontSize.p3,
    color: colorTheme.cloudGray,
    cursor: "pointer",
    padding: "10px 0",
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
            display: { xs: "flex", md: "none" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              width: "25px",
              transform: "rotate(180deg)",
              cursor: "pointer",
            }}
            src={svgs.WhiteHamburger}
            alt="WhiteHamburger"
            onClick={() => toggleDrawer(true)}
          />
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              gap: { xs: "8px", sm: "15px" },
            }}
          >
            <Image
              style={{ width: "25px", height: "25px" }}
              src={svgs.Facebook}
              alt="facebook"
            />
            <Image
              style={{ width: "25px", height: "25px" }}
              src={svgs.Twitter}
              alt="facebook"
            />
            <Image
              style={{ width: "25px", height: "25px" }}
              src={svgs.Instagram}
              alt="facebook"
            />
          </Box>
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
            // onClick={() => handleMouseEnter("All sofas")}
            onMouseOver={() => handleMouseEnter("All sofas")}
            onMouseLeave={handleMouseLeave}
            sx={{ ...textStyles }}
          >
            All sofas
          </Typography>
          <Typography sx={{ ...textStyles }}>Fabric sofas</Typography>
          <Typography sx={{ ...textStyles }}>Corner sofas</Typography>
          <Typography sx={{ ...textStyles }}>Leather sofas</Typography>
          <Typography sx={{ ...textStyles }}>Chair</Typography>
          <Typography sx={{ ...textStyles }}>Fabric</Typography>
          <Typography sx={{ ...textStyles }}>Quick delivery</Typography>
          <Typography sx={{ ...textStyles }}>Accesoories</Typography>
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
