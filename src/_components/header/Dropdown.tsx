"use client";
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { colorTheme, fontSize } from "@/_utils/themes";
import Image from "next/image";
import pngs from "@/_assets/pngs";

const Dropdown: React.FC<{
  category: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}> = ({ onMouseEnter, onMouseLeave }) => {
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
    "&:hover": {
      color: colorTheme.forestShadow,
    },
    "&:active": {
      color: colorTheme.forestShadow,
    },
  };

  return (
    <Box
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      sx={{
        position: "absolute",
        top: "100%",
        left: 0,
        width: "100%",
        backgroundColor: "#f8f8f8",
        zIndex: 1000,
        padding: {
          xs: "20px 20px",
          md: "20px 50px",
          lg: "20px 90px",
          xl: "20px 120px",
        },
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid sx={{ maxWidth: "1400px" }} container spacing={2}>
        <Grid item xs={2}>
          <Typography sx={{ ...headingStyles }} variant="h6" gutterBottom>
            Type
          </Typography>
          <Typography sx={{ ...textStyles }}>2 Seaters</Typography>
          <Typography sx={{ ...textStyles }}>3 Seaters</Typography>
          <Typography sx={{ ...textStyles }}>4 Seaters</Typography>
          <Typography sx={{ ...textStyles }}>Corner</Typography>
          <Typography sx={{ ...textStyles }}>Sofa Chair</Typography>
          <Typography sx={{ ...textStyles }}>Foot-Stools</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography sx={{ ...headingStyles }} variant="h6" gutterBottom>
            Model
          </Typography>
          <Typography sx={{ ...textStyles }}>Buoyant</Typography>
          <Typography sx={{ ...textStyles }}>Designer Fabric</Typography>
          <Typography sx={{ ...textStyles }}>La-Z-Boy</Typography>
          <Typography sx={{ ...textStyles }}>Red Rose</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography sx={{ ...headingStyles }} variant="h6" gutterBottom>
            Material
          </Typography>
          <Typography sx={{ ...textStyles }}>Fabric Sofas</Typography>
          <Typography sx={{ ...textStyles }}>Leather Sofas</Typography>
          <Typography sx={{ ...textStyles }}>Velvet Sofas</Typography>
          <Typography sx={{ ...textStyles }}>Boucle Sofas</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography sx={{ ...headingStyles }} variant="h6" gutterBottom>
            Color
          </Typography>
          <Typography sx={{ ...textStyles }}>Beige</Typography>
          <Typography sx={{ ...textStyles }}>Teal</Typography>
          <Typography sx={{ ...textStyles }}>Blue</Typography>
          <Typography sx={{ ...textStyles }}>Grey</Typography>
          <Typography sx={{ ...textStyles }}>Green</Typography>
          <Typography sx={{ ...textStyles }}>Orange</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography sx={{ ...headingStyles }} variant="h6" gutterBottom>
            Price
          </Typography>
          <Typography sx={{ ...textStyles }}>Under £700</Typography>
          <Typography sx={{ ...textStyles }}>Under £1000</Typography>
          <Typography sx={{ ...textStyles }}>Under £1500</Typography>
        </Grid>
        <Grid item xs={2}>
          <Box sx={{ textAlign: "center" }}>
            <Typography sx={{ ...headingStyles }} variant="h6" gutterBottom>
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
            <Typography sx={{ ...textStyles }} variant="body2">
              Red Rose Sofas
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dropdown;
