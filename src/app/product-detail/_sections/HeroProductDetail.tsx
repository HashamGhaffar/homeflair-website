"use client";
import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { colorTheme, fontSize } from "@/_utils/themes";
import Image, { StaticImageData } from "next/image";
import pngs from "@/_assets/pngs";

interface NavigationImageProps {
  imageSrc: StaticImageData;
}

const navigationImages: NavigationImageProps[] = [
  { imageSrc: pngs.BeatrixFabricSofa },
  { imageSrc: pngs.BeatrixFabricSofa },
  { imageSrc: pngs.BeatrixFabricSofa },
  { imageSrc: pngs.BeatrixFabricSofa },
  { imageSrc: pngs.BeatrixFabricSofa },
];

export default function ProductDetailHero() {
  return (
    <Box
      sx={{
        background: `linear-gradient(90deg, ${colorTheme.softWhite} 0%, ${colorTheme.lightSilver} 100%)`,
        padding: {
          xs: "40px 20px",
          sm: "50px 30px",
          md: "50px 100px",
          lg: "70px 150px",
        },
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <Typography
          sx={{
            fontSize: fontSize.p3,
            color: colorTheme.softCharcoal,
            textTransform: "capitalize",
            textAlign: "left",
            paddingBottom: {
              xs: "20px",
              sm: "30px",
            },
          }}
        >
          Products /{" "}
          <span style={{ color: colorTheme.red }}>
            Beatrix red Sofa Collection | Buoyant Upholstery
          </span>
        </Typography>
        <Grid
          sx={{ rowGap: { xs: "30px", md: "0" } }}
          container
          alignItems="flex-start"
          justifyContent="space-between"
        >
          {/* Image Section */}
          <Grid item xs={12} md={5.9} lg={5.8} xl={5.5}>
            <Box
              sx={{
                maxWidth: {
                  xs: "220px",
                  sm: "300px",
                  md: "450px",
                  lg: "500px",
                  xl: "550px",
                },
                maxHeight: {
                  xs: "200px",
                  sm: "270px",
                  md: "410px",
                  lg: "460px",
                  xl: "500px",
                },
                border: `1px solid ${colorTheme.cloudGray}`,
                backgroundColor: colorTheme.White,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={pngs.BeatrixFabricSofa}
                alt="Beatrix Fabric Sofa"
                layout="intrinsic"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </Box>

            {/* Navigation Image Box */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "10px",
                width: "100%",
                paddingTop: { xs: "10px", md: "30px" },
              }}
            >
              {navigationImages.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    maxWidth: {
                      xs: "40px",
                      sm: "50px",
                      md: "60px",
                      xl: "100px",
                    },
                    maxHeight: {
                      xs: "40px",
                      sm: "50px",
                      md: "60px",
                      xl: "100px",
                    },
                  }}
                >
                  <Image
                    src={item.imageSrc}
                    alt={`Navigation Image ${index + 1}`}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Text Section */}
          <Grid
            item
            xs={12}
            md={5.9}
            lg={5.8}
            xl={5.8}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: {
                    xs: fontSize.h5.xs,
                    sm: fontSize.h5.sm,
                    md: fontSize.h4.md,
                    lg: fontSize.h4.lg,
                  },
                  fontWeight: "700",
                  color: colorTheme.forestShadow,
                  textTransform: "uppercase",
                  marginBottom: { xs: "8px", md: "16px" },
                }}
              >
                Beatrix Fabric Sofa Collection | Buoyant Upholstery
              </Typography>

              <Typography
                sx={{
                  fontSize: {
                    xs: fontSize.p2.xs,
                    sm: fontSize.p2.sm,
                    md: fontSize.p1.md,
                    lg: fontSize.p1.lg,
                  },
                  fontWeight: "700",
                  color: colorTheme.red,
                  marginBottom: { xs: "12px", md: "24px" },
                }}
              >
                £99.98
              </Typography>

              <Typography
                sx={{
                  fontSize: {
                    xs: fontSize.p3.xs,
                    sm: fontSize.p2.sm,
                    md: fontSize.p2.md,
                    lg: fontSize.p2.lg,
                  },
                  color: colorTheme.forestShadow,
                  lineHeight: "1.6",
                }}
              >
                Beatrix Fabric Sofa Adding a touch of vibrance and personality,
                the Beatrix Fabric Sofa comes with striking floral accent
                cushions that beautifully contrast against the darker tones of
                the upholstery. This thoughtful design element creates a dynamic
                visual appeal and adds a playful pop of colour to your living
                space. Designed for both comfort and style, the Beatrix Sofa
                boasts a high backrest that provides excellent support for your
                posture and adds a touch of grandeur to the overall design. It
                is available in a range of luxurious colours, allowing you to
                select the perfect shade to suit your personal taste and
                complement your existing decor.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
