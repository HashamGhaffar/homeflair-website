"use client";
import React from "react";
import { Box, Grid, Typography, Divider } from "@mui/material";
import Image from "next/image";
import { colorTheme, fontSize } from "@/_utils/themes";

interface ColorMenuSliderProps {
  items: { image: string; alt: string }[];
}

export function ColorMenuSlider({ items }: ColorMenuSliderProps) {
  return (
    <Grid
      container
      sx={{
        maxWidth: "1200px",
        margin: "0 auto",
        justifyContent: { xs: "center", sm: "space-between" },
        rowGap: "30px",
      }}
    >
      {items.map((item, index) => (
        <Grid item xs={3} sm={2.4} md={2.4} key={index}>
          <Box
            sx={{
              margin: "auto",
              width: { xs: "50px", sm: "80px", md: "100px" },
              height: { xs: "50px", sm: "80px", md: "100px" },
            }}
          >
            <Image
              src={item.image}
              alt={item.alt}
              layout="responsive"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
        </Grid>
      ))}
      <Divider
        sx={{
          marginTop: {
            xs: "40px",
            sm: "50px",
            md: "50px",
            lg: "70px",
          },
          borderColor: colorTheme.dimAsh,
          borderWidth: "1px",
          borderStyle: "solid",
          width: "100%",
        }}
      />
    </Grid>
  );
}
interface FabricMenuSliderProps {
  items: { image: string; alt: string; fabricName: string }[];
}
export function FabricMenuSlider({ items }: FabricMenuSliderProps) {
  return (
    <>
      <Grid
        container
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          justifyContent: { xs: "center", sm: "space-between" },
          rowGap: "30px",
        }}
      >
        {items.map((item, index) => (
          <Grid item xs={3} sm={2.4} md={2.4} key={index}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: { xs: "6px", sm: "8px", md: "12px" },
              }}
            >
              <Box
                sx={{
                  margin: "auto",
                  width: { xs: "50px", sm: "80px", md: "100px" },
                  height: { xs: "50px", sm: "80px", md: "100px" },
                }}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  layout="responsive"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
              <Typography
                sx={{ fontSize: fontSize.p3, color: colorTheme.SoftAsh }}
              >
                {item.fabricName}
              </Typography>
            </Box>
          </Grid>
        ))}
        <Divider
          sx={{
            marginTop: {
              xs: "40px",
              sm: "50px",
              md: "50px",
              lg: "70px",
            },
            borderColor: colorTheme.dimAsh,
            borderWidth: "1px",
            borderStyle: "solid",
            width: "100%",
          }}
        />
      </Grid>
    </>
  );
}
