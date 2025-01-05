"use client";
import React from "react";
import { Box, Typography, Checkbox } from "@mui/material";
import { colorTheme, fontSize } from "@/_utils/themes";

export default function SortByDropdown({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}) {
  const sortOptions = [
    { label: "Name (A to Z)" },
    { label: "Name (Z to A)" },
    { label: "Price (Low To High)" },
    { label: "Price (High To Low)" },
    { label: "Best Selling" },
    { label: "Featured" },
  ];

  return (
    <Box
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "calc(100% + 8px)",
        right: 0,
        width: { sx: "180px", sm: "250px", lg: "300px" },
        backgroundColor: colorTheme.white,
        borderRadius: "8px",
        boxShadow: `0px 4px 6px ${colorTheme.subtleBlack}`,
        border: `1px solid ${colorTheme.red}`,
        zIndex: 1001,
        padding: "10px 0",
      }}
    >
      {sortOptions.map((option, index) => (
        <Box
          key={index}
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
