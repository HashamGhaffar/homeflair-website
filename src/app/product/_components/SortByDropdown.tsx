"use client";
import React, { useState, useEffect } from "react";
import { Box, Typography, Checkbox } from "@mui/material";
import { colorTheme, fontSize } from "@/_utils/themes";

interface SortOption {
  label: string;
  value: string;
}

interface SortByDropdownProps {
  selectedSort: string;
  onSortChange: (sortValue: string) => void;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

export default function SortByDropdown({
  selectedSort,
  onSortChange,
  onClick,
}: SortByDropdownProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const sortOptions: SortOption[] = [
    { label: "Name (A to Z)", value: "name_asc" },
    { label: "Name (Z to A)", value: "name_desc" },
    { label: "Price (Low To High)", value: "price_asc" },
    { label: "Price (High To Low)", value: "price_desc" },
  ];

  const handleSortChange = (value: string) => {
    onSortChange(value);
  };

  return (
    <Box
      onClick={(e) => {
        onClick(e);
      }}
      sx={{
        position: "absolute",
        top: "calc(100% + 8px)",
        right: 0,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "scale(1)" : "scale(0.95)",
        width: { sx: "180px", sm: "250px", lg: "300px" },
        backgroundColor: colorTheme.white,
        borderRadius: "8px",
        boxShadow: `0px 4px 6px ${colorTheme.subtleBlack}`,
        border: `1px solid ${colorTheme.red}`,
        zIndex: 1001,
        padding: "10px 0",
        transition: "opacity 0.4s ease-in-out, transform 0.4s ease-in-out",
        pointerEvents: isVisible ? "auto" : "none",
      }}
    >
      {sortOptions.map((option) => (
        <Box
          key={option.value}
          onClick={() => handleSortChange(option.value)}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0px 20px",
            cursor: "pointer",
          }}
        >
          <Typography
            sx={{
              fontSize: fontSize.p3,
              color: colorTheme.softCharcoal,
              textWrap: "nowrap",
            }}
          >
            {option.label}
          </Typography>
          <Checkbox
            checked={selectedSort === option.value}
            sx={{
              color: colorTheme.SoftAsh,
              "&.Mui-checked": {
                color: colorTheme.red,
              },
            }}
          />
        </Box>
      ))}
    </Box>
  );
}
