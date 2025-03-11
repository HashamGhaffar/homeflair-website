"use client";
import React, { Key } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { colorTheme, fontSize } from "@/_utils/themes";
import Image from "next/image";
import pngs from "@/_assets/pngs";
import { useRouter } from "next/navigation";

const Dropdown: React.FC<{
  menuData: {
    title: Key | null | undefined;
    category: string;
    items: { label: string; query: string }[];
  }[];
  category: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}> = ({ menuData, onMouseEnter, onMouseLeave }) => {
  const headingStyles = {
    fontSize: fontSize.p2,
    color: colorTheme.red,
    textDecoration: "underline",
    fontWeight: "700",
    textTransform: "uppercase",
    paddingBottom: "15px",
  };

  const textStyles = {
    color: colorTheme.SoftAsh,
    fontSize: fontSize.p5,
    cursor: "pointer",
    paddingBottom: "8px",
    "&:hover": { color: colorTheme.forestShadow },
    "&:active": { color: colorTheme.forestShadow },
  };

  const router = useRouter();

  return (
    <Box
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      sx={{
        position: "absolute",
        top: "100%",
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        backgroundColor: colorTheme.lightGrey,
        zIndex: 1000,
        padding: {
          xs: "20px",
          md: "40px 50px",
          lg: "60px 90px",
          xl: "60px 120px",
        },
        boxShadow: `0px 4px 6px ${colorTheme.subtleBlack}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={4} justifyContent="center">
          {menuData.map((category) => (
            <Grid item xs={2} key={category.title}>
              <Typography
                sx={{ ...headingStyles, textAlign: "left" }}
                variant="h6"
                gutterBottom
              >
                {category.title}
              </Typography>
              {category.items.map(({ label, query }) => (
                <Typography
                  key={label}
                  onClick={() => query && router.push(`/product?${query}`)}
                  sx={{ ...textStyles, textAlign: "left" }}
                >
                  {label}
                </Typography>
              ))}
            </Grid>
          ))}

          {/* Christmas Promo Section */}
          <Grid item xs={2}>
            <Box sx={{ textAlign: "center" }}>
              <Typography sx={headingStyles} variant="h6" gutterBottom>
                Christmas Promo
              </Typography>
              <Box
                sx={{
                  maxWidth: "170px",
                  height: "auto",
                  marginBottom: "10px",
                  margin: "auto",
                }}
              >
                <Image
                  src={pngs.RedRoseSofa}
                  alt="Red Rose Sofa"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </Box>
              <Typography sx={textStyles} variant="body2">
                Red Rose Sofas
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dropdown;
