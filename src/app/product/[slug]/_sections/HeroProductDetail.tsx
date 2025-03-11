"use client";
import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import { colorTheme, fontSize } from "@/_utils/themes";
import Image from "next/image";
import { Product } from "@/types/product";

export default function ProductDetailHero({ product }: { product: Product }) {
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [navigationImages, setNavigationImages] = useState<string[]>([]);

  useEffect(() => {
    setMainImage(product.mainImage);
    setNavigationImages([product.mainImage, ...product.images]);
  }, [product]);

  return (
    <Box
      sx={{
        backgroundColor: { lg: "#2F302C" },
        padding: { lg: "0 60px" },
        marginTop: "-1px",
      }}
    >
      <Box
        sx={{
          padding: {
            xs: "40px 20px",
            sm: "50px 30px",
            md: "50px 100px",
            lg: "70px 150px",
          },
          maxWidth: "1500px",
          margin: "auto",
          backgroundColor: "#ffffff",
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
          Products /
          <span style={{ color: colorTheme.red }}>{product.name}</span>
        </Typography>
        <Grid
          sx={{ rowGap: { xs: "30px", md: "0" } }}
          container
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Grid item xs={12} md={5.9} lg={5.8} xl={5.5}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
              }}
            >
              {/* Main Image */}
              <Box
                sx={{
                  height: {
                    xs: "400px",
                    md: "410px",
                    lg: "460px",
                    xl: "500px",
                  },
                  backgroundColor: colorTheme.White,
                  width: "100%",
                }}
              >
                <Image
                  src={mainImage || product.mainImage}
                  alt="Beatrix Fabric Sofa"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  width={500}
                  height={500}
                />
              </Box>
              {/* Thumbnail Images */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "flex-start", md: "space-between" },
                  alignItems: "center",
                  gap: "10px",
                  width: "100%",
                  paddingTop: { xs: "10px", md: "30px" },
                  flexWrap: "wrap",
                }}
              >
                {navigationImages.map((item, index) => (
                  <Box
                    key={index}
                    onClick={() => {
                      setMainImage(item);
                    }}
                    sx={{
                      cursor: "pointer",
                      border:
                        mainImage === item
                          ? `2px solid ${colorTheme.red}`
                          : "none",
                      width: {
                        xs: "40px",
                        sm: "50px",
                        md: "60px",
                        xl: "120px",
                      },
                      height: {
                        xs: "40px",
                        sm: "50px",
                        md: "60px",
                        xl: "120px",
                      },
                    }}
                  >
                    <Image
                      src={item}
                      alt={`Navigation Image ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      width={150}
                      height={150}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5.9} lg={5.8} xl={5.8}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                gap: { xs: "16px", md: "24px", xl: "30px" },
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontSize: fontSize.h5,
                  fontWeight: "700",
                  color: colorTheme.forestShadow,
                  textTransform: "uppercase",
                }}
              >
                {product.name}
              </Typography>
              <Divider
                sx={{
                  borderColor: colorTheme.transparentForestShadow,
                  borderWidth: "1px",
                  borderStyle: "solid",
                }}
              />
              <Typography
                sx={{
                  fontSize: fontSize.p2,
                  color: colorTheme.forestShadow,
                  fontWeight: "700",
                }}
              >
                DESCRIPTION
              </Typography>
              <Typography
                sx={{
                  fontSize: fontSize.p3,
                  color: colorTheme.muddyMossGray,
                }}
              >
                {product.shortDescription}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
