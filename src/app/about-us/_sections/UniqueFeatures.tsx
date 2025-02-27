"use client";
import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { colorTheme, fontSize } from "@/_utils/themes";
import Image from "next/image";
import pngs from "@/_assets/pngs";
import svgs from "@/_assets/svgs";

export default function UniqueFeatures() {
  const titleStyles = {
    fontSize: fontSize.p1,
    color: colorTheme.forestShadow,
    marginBottom: { xs: "6px", md: "10px" },
    fontWeight: "700",
  };

  const descriptionStyles = {
    fontSize: fontSize.p2,
    color: colorTheme.softCharcoal,
    marginBottom: { xs: "6px", md: "10px" },
  };
  return (
    <Box
      sx={{
        backgroundColor: colorTheme.pureFog,
        padding: {
          xs: "40px 20px",
          sm: "50px 30px",
          md: "50px 90px",
          lg: "70px 90px",
        },
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <Grid
          container
          columnSpacing={4}
          rowSpacing={4}
          alignItems="flex-start"
          direction={{ xs: "column-reverse", md: "row" }}
        >
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                ...titleStyles,
                fontWeight: "900",
                fontFamily: "'Playfair Display', serif",
                textTransform: "uppercase",
              }}
            >
              What Makes Us Different?
            </Typography>
            <Typography sx={{ ...descriptionStyles }}>
              Whether you&#39;re furnishing a cozy apartment or a sprawling
              estate, we&#39;re here to help you find the perfect pieces to
              reflect your personality and lifestyle.
            </Typography>
            <Box>
              <Box
                sx={{ display: "flex", alignItems: "flex-start", gap: "15px" }}
              >
                <Image
                  style={{
                    height: "25px",
                    width: "25px",
                    objectFit: "contain",
                  }}
                  src={svgs.Tick}
                  alt="tick"
                />
                <Box>
                  <Typography sx={{ ...titleStyles }}>
                    Quality Craftsmanship
                  </Typography>
                  <Typography sx={{ ...descriptionStyles }}>
                    We work with skilled artisans and trusted manufacturers to
                    ensure every piece is built to last.
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{ display: "flex", alignItems: "flex-start", gap: "15px" }}
              >
                <Image
                  style={{
                    height: "25px",
                    width: "25px",
                    objectFit: "contain",
                  }}
                  src={svgs.Tick}
                  alt="tick"
                />
                <Box>
                  <Typography sx={{ ...titleStyles }}>
                    Quality Craftsmanship
                  </Typography>
                  <Typography sx={{ ...descriptionStyles }}>
                    We work with skilled artisans and trusted manufacturers to
                    ensure every piece is built to last.
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{ display: "flex", alignItems: "flex-start", gap: "15px" }}
              >
                <Image
                  style={{
                    height: "25px",
                    width: "25px",
                    objectFit: "contain",
                  }}
                  src={svgs.Tick}
                  alt="tick"
                />
                <Box>
                  <Typography sx={{ ...titleStyles }}>
                    Quality Craftsmanship
                  </Typography>
                  <Typography sx={{ ...descriptionStyles }}>
                    We work with skilled artisans and trusted manufacturers to
                    ensure every piece is built to last.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ height: "100%", maxWidth: "554px" }}>
              <Image
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                src={pngs.UniqueFeaturesImage}
                alt="Welcome"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
