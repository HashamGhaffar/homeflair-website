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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
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
    padding: "15px 0",
  };

  // Define navigation items dynamically
  const navigationItems = [
    { label: "All sofas", category: "all-sofas" },
    { label: "Fabric sofas", category: "fabric-sofas" },
    { label: "Corner sofas", category: "corner-sofas" },
    { label: "Leather sofas", category: "leather-sofas" },
    { label: "Chair", category: "chair" },
  ];

  type MenuItem = {
    label: string;
    query: string;
  };

  type MenuCategory = {
    title: string;
    category: string;
    items: MenuItem[];
  };

  const menuDataMapping: Record<string, MenuCategory[]> = {
    "all-sofas": [
      {
        title: "Type",
        category: "Type",
        items: [
          { label: "2 Seaters", query: "seaters=2+Seaters+sofas" },
          { label: "3 Seaters", query: "seaters=3+Seaters+sofas" },
          { label: "4 Seaters", query: "seaters=4+Seaters+sofas" },
          { label: "Corner", query: "seaters=Corner+sofas" },
          { label: "Sofa Chair", query: "seaters=Chairs" },
          { label: "Foot-Stools", query: "seaters=Footstools" },
        ],
      },
      {
        title: "Material",
        category: "Material",
        items: [
          { label: "Fabric Sofas", query: "material=Fabric+Sofas" },
          { label: "Leather Sofas", query: "material=Leather+Sofas" },
          { label: "Fabric Chair", query: "material=Fabric+Chair" },
          { label: "Boucle Sofas", query: "" },
        ],
      },
      {
        title: "Price",
        category: "Price",
        items: [
          { label: "Under £700", query: "minPrice=100&maxPrice=700" },
          { label: "Under £1000", query: "minPrice=100&maxPrice=1000" },
          { label: "Under £1500", query: "minPrice=100&maxPrice=1500" },
        ],
      },
      {
        title: "Color",
        category: "Color",
        items: [
          {
            label: "Yellow",
            query: `colour=${encodeURIComponent(colorTheme.choiceYellow)}`,
          },
          {
            label: "White",
            query: `colour=${encodeURIComponent(colorTheme.choiceWhite)}`,
          },
          {
            label: "Grey",
            query: `colour=${encodeURIComponent(colorTheme.choiceGrey)}`,
          },
          {
            label: "Blue",
            query: `colour=${encodeURIComponent(colorTheme.choiceBlue)}`,
          },
          {
            label: "Charcoal",
            query: `colour=${encodeURIComponent(colorTheme.choiceCharcoal)}`,
          },
          {
            label: "Brown",
            query: `colour=${encodeURIComponent(colorTheme.choiceBrown)}`,
          },
          {
            label: "Light Blue",
            query: `colour=${encodeURIComponent(colorTheme.choiceLightBlue)}`,
          },
        ],
      },
    ],
    "fabric-sofas": [
      {
        title: "Type",
        category: "Type",
        items: [
          { label: "2 Seaters", query: "seaters=2+Seaters+sofas" },
          { label: "3 Seaters", query: "seaters=3+Seaters+sofas" },
          { label: "4 Seaters", query: "seaters=4+Seaters+sofas" },
          { label: "Corner", query: "seaters=Corner+sofas" },
          { label: "Sofa Chair", query: "seaters=Chairs" },
          { label: "Foot-Stools", query: "seaters=Footstools" },
        ],
      },
      {
        title: "Price",
        category: "Price",
        items: [
          { label: "Under £700", query: "minPrice=100&maxPrice=700" },
          { label: "Under £1000", query: "minPrice=100&maxPrice=1000" },
          { label: "Under £1500", query: "minPrice=100&maxPrice=1500" },
        ],
      },
      {
        title: "Color",
        category: "Color",
        items: [
          {
            label: "Yellow",
            query: `colour=${encodeURIComponent(colorTheme.choiceYellow)}`,
          },
          {
            label: "White",
            query: `colour=${encodeURIComponent(colorTheme.choiceWhite)}`,
          },
          {
            label: "Grey",
            query: `colour=${encodeURIComponent(colorTheme.choiceGrey)}`,
          },
          {
            label: "Blue",
            query: `colour=${encodeURIComponent(colorTheme.choiceBlue)}`,
          },
          {
            label: "Charcoal",
            query: `colour=${encodeURIComponent(colorTheme.choiceCharcoal)}`,
          },
          {
            label: "Brown",
            query: `colour=${encodeURIComponent(colorTheme.choiceBrown)}`,
          },
          {
            label: "Light Blue",
            query: `colour=${encodeURIComponent(colorTheme.choiceLightBlue)}`,
          },
        ],
      },
    ],
    "corner-sofas": [
      {
        title: "Material",
        category: "Material",
        items: [
          { label: "Fabric Sofas", query: "material=Fabric+Sofas" },
          { label: "Leather Sofas", query: "material=Leather+Sofas" },
          { label: "Fabric Chair", query: "material=Fabric+Chair" },
          { label: "Boucle Sofas", query: "" },
        ],
      },
      {
        title: "Price",
        category: "Price",
        items: [
          { label: "Under £700", query: "minPrice=100&maxPrice=700" },
          { label: "Under £1000", query: "minPrice=100&maxPrice=1000" },
          { label: "Under £1500", query: "minPrice=100&maxPrice=1500" },
        ],
      },
      {
        title: "Model",
        category: "Model",
        items: [
          { label: "Buoyant", query: "brand=Buoyant" },
          { label: "Designer Fabric", query: "brand=Designer+Fabric" },
          { label: "La-Z-Boy", query: "brand=La-Z-Boy" },
          { label: "Red Rose", query: "brand=Red+Rose" },
        ],
      },
      {
        title: "Color",
        category: "Color",
        items: [
          {
            label: "Yellow",
            query: `colour=${encodeURIComponent(colorTheme.choiceYellow)}`,
          },
          {
            label: "White",
            query: `colour=${encodeURIComponent(colorTheme.choiceWhite)}`,
          },
          {
            label: "Grey",
            query: `colour=${encodeURIComponent(colorTheme.choiceGrey)}`,
          },
          {
            label: "Blue",
            query: `colour=${encodeURIComponent(colorTheme.choiceBlue)}`,
          },
          {
            label: "Charcoal",
            query: `colour=${encodeURIComponent(colorTheme.choiceCharcoal)}`,
          },
          {
            label: "Brown",
            query: `colour=${encodeURIComponent(colorTheme.choiceBrown)}`,
          },
          {
            label: "Light Blue",
            query: `colour=${encodeURIComponent(colorTheme.choiceLightBlue)}`,
          },
        ],
      },
    ],
    "leather-sofas": [
      {
        title: "Type",
        category: "Type",
        items: [
          { label: "2 Seaters", query: "seaters=2+Seaters+sofas" },
          { label: "3 Seaters", query: "seaters=3+Seaters+sofas" },
          { label: "4 Seaters", query: "seaters=4+Seaters+sofas" },
          { label: "Corner", query: "seaters=Corner+sofas" },
          { label: "Sofa Chair", query: "seaters=Chairs" },
          { label: "Foot-Stools", query: "seaters=Footstools" },
        ],
      },
      {
        title: "Material",
        category: "Material",
        items: [
          { label: "Fabric Sofas", query: "material=Fabric+Sofas" },
          { label: "Leather Sofas", query: "material=Leather+Sofas" },
          { label: "Fabric Chair", query: "material=Fabric+Chair" },
          { label: "Boucle Sofas", query: "" },
        ],
      },
      {
        title: "Price",
        category: "Price",
        items: [
          { label: "Under £700", query: "minPrice=100&maxPrice=700" },
          { label: "Under £1000", query: "minPrice=100&maxPrice=1000" },
          { label: "Under £1500", query: "minPrice=100&maxPrice=1500" },
        ],
      },
      {
        title: "Model",
        category: "Model",
        items: [
          { label: "Buoyant", query: "brand=Buoyant" },
          { label: "Designer Fabric", query: "brand=Designer+Fabric" },
          { label: "La-Z-Boy", query: "brand=La-Z-Boy" },
          { label: "Red Rose", query: "brand=Red+Rose" },
        ],
      },
      {
        title: "Color",
        category: "Color",
        items: [
          {
            label: "Yellow",
            query: `colour=${encodeURIComponent(colorTheme.choiceYellow)}`,
          },
          {
            label: "White",
            query: `colour=${encodeURIComponent(colorTheme.choiceWhite)}`,
          },
          {
            label: "Grey",
            query: `colour=${encodeURIComponent(colorTheme.choiceGrey)}`,
          },
          {
            label: "Blue",
            query: `colour=${encodeURIComponent(colorTheme.choiceBlue)}`,
          },
          {
            label: "Charcoal",
            query: `colour=${encodeURIComponent(colorTheme.choiceCharcoal)}`,
          },
          {
            label: "Brown",
            query: `colour=${encodeURIComponent(colorTheme.choiceBrown)}`,
          },
          {
            label: "Light Blue",
            query: `colour=${encodeURIComponent(colorTheme.choiceLightBlue)}`,
          },
        ],
      },
    ],
    chair: [
      {
        title: "Material",
        category: "Material",
        items: [
          { label: "Fabric Sofas", query: "material=Fabric+Sofas" },
          { label: "Leather Sofas", query: "material=Leather+Sofas" },
          { label: "Fabric Chair", query: "material=Fabric+Chair" },
          { label: "Boucle Sofas", query: "" },
        ],
      },
      {
        title: "Price",
        category: "Price",
        items: [
          { label: "Under £700", query: "minPrice=100&maxPrice=700" },
          { label: "Under £1000", query: "minPrice=100&maxPrice=1000" },
          { label: "Under £1500", query: "minPrice=100&maxPrice=1500" },
        ],
      },
      {
        title: "Model",
        category: "Model",
        items: [
          { label: "Buoyant", query: "brand=Buoyant" },
          { label: "Designer Fabric", query: "brand=Designer+Fabric" },
          { label: "La-Z-Boy", query: "brand=La-Z-Boy" },
          { label: "Red Rose", query: "brand=Red+Rose" },
        ],
      },
      {
        title: "Color",
        category: "Color",
        items: [
          {
            label: "Yellow",
            query: `colour=${encodeURIComponent(colorTheme.choiceYellow)}`,
          },
          {
            label: "White",
            query: `colour=${encodeURIComponent(colorTheme.choiceWhite)}`,
          },
          {
            label: "Grey",
            query: `colour=${encodeURIComponent(colorTheme.choiceGrey)}`,
          },
          {
            label: "Blue",
            query: `colour=${encodeURIComponent(colorTheme.choiceBlue)}`,
          },
          {
            label: "Charcoal",
            query: `colour=${encodeURIComponent(colorTheme.choiceCharcoal)}`,
          },
          {
            label: "Brown",
            query: `colour=${encodeURIComponent(colorTheme.choiceBrown)}`,
          },
          {
            label: "Light Blue",
            query: `colour=${encodeURIComponent(colorTheme.choiceLightBlue)}`,
          },
        ],
      },
    ],
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
            padding: { xs: "12px 20px" },
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
              alt="twitter"
            />
            <Image
              style={{ width: "25px", height: "25px" }}
              src={svgs.Instagram}
              alt="instagram"
            />
          </Box>
        </Box>

        {/* Desktop Navigation */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            gap: { xs: "20px", sm: "30px" },
            overflowX: "auto",
            whiteSpace: "nowrap",
            width: "100%",
            boxSizing: "border-box",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {navigationItems.map(({ label, category }) => (
            <Typography
              key={category}
              onMouseOver={() => handleMouseEnter(category)}
              onMouseLeave={handleMouseLeave}
              sx={textStyles}
            >
              {label}
            </Typography>
          ))}
        </Box>
      </Box>

      {/* Drawer for Small Screens */}
      <DrawerMenu isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />

      {/* Dropdown for Larger Screens */}
      {activeDropdown && (
        <Dropdown
          category={activeDropdown}
          menuData={menuDataMapping[activeDropdown] || []} // Ensure we pass an empty array if no data is found
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
