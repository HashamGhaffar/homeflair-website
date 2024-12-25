import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { colorTheme, fontSize } from "@/_utils/themes";
import pngs from "@/_assets/pngs";

interface GridItemData {
  imageSrc: string | StaticImageData;
  altText: string;
  label: string;
}

const gridItems: GridItemData[] = [
  {
    imageSrc: pngs.BlueWingback,
    altText: "BlueArmchair",
    label: "red rose sofas",
  },
  {
    imageSrc: pngs.BlueOttoman,
    altText: "BlueArmchair",
    label: "red rose sofas",
  },
  {
    imageSrc: pngs.BlueArmchair,
    altText: "BlueArmchair",
    label: "red rose sofas",
  },
];

export function LastSavingItems(): JSX.Element {
  return (
    <Grid
      sx={{
        paddingY: {
          xs: "30px",
          sm: "60px",
        },
        maxWidth: "1440px",
        margin: "auto",
        gap: { xs: "32px", lg: "0" },
      }}
      container
    >
      {gridItems.map((item, index) => (
        <Grid key={index} item xs={12} lg={4} xl={4}>
          <Box
            sx={{
              maxWidth: { xs: "400px", md: "450px", lg: "480px" },
              height: { xs: "auto", lg: "398px" },
              position: "relative",
              margin: "auto",
            }}
          >
            <Image
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={item.imageSrc}
              alt={item.altText}
            />
            <Typography
              sx={{
                padding: "5px 10px",
                backgroundColor: colorTheme.shadowGrey,
                color: colorTheme.white,
                position: "absolute",
                top: { xs: "14px", md: "20px" },
                left: { xs: "14px", md: "20px" },
                fontSize: fontSize.p1,
              }}
            >
              {item.label}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
