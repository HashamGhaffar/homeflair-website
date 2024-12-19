"use client";
import React, { useState, useRef } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { colorTheme, fontSize } from "@/_utils/themes";

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
        paddingX: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
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
          // onMouseEnter={() => handleMouseEnter("All sofas")}
          onMouseLeave={handleMouseLeave}
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

const Dropdown: React.FC<{
  category: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}> = ({ onMouseEnter, onMouseLeave }) => {
  const headingStyles = {
    fontSize: fontSize.primaryTypography,
    color: colorTheme.red,
    textDecoration: "underline",
    fontWeight: "700",
    textTransform: "uppercase",
    paddingBottom: "15px",
  };
  const textStyles = {
    color: colorTheme.SoftAsh,
    fontSize: fontSize.tertiaryTypography,
    cursor: "pointer",
    paddingBottom: "8px",
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
          <Card>
            <CardMedia
              component="img"
              height="100"
              image="https://via.placeholder.com/150"
              alt="Promo"
            />
            <CardContent>
              <Typography sx={{ ...headingStyles }} variant="body1">
                Christmas Promo
              </Typography>
              <Typography sx={{ ...textStyles }} variant="body2">
                Red Rose Sofas
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductNavigation;
