"use client";
import React from "react";
import { Box, Grid } from "@mui/material";
import Image from "next/image";

interface MenuSliderProps {
  items: { image: string; alt: string }[];
}

export function ColorMenuSlider({ items }: MenuSliderProps) {
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
    </Grid>
  );
}
