import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { colorTheme, fontSize } from "@/_utils/themes";

interface GridItemData {
  imageSrc: string | StaticImageData;
  altText: string;
  label: string;
}

interface LastSavingItemsProps {
  items: GridItemData[]; // ✅ Dynamic data passed via props
}

export function LastSavingItems({ items }: LastSavingItemsProps): JSX.Element {
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
      {items.map((item, index) => (
        <Grid key={index} item xs={12} lg={4} xl={4}>
          <Box
            sx={{
              maxWidth: { xs: "400px", md: "450px", lg: "480px" },
              width: "100%",
              height: { xs: "250px", sm: "300px", md: "320px", lg: "398px" },
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
              width={480}
              height={398}
            />
            {item.label && (
              <Typography
                sx={{
                  padding: "5px 10px",
                  backgroundColor: colorTheme.shadowGrey,
                  color: colorTheme.white,
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  right: "10px",
                  width: "auto",
                  fontSize: fontSize.p1,
                  // text ellipsis
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {item.label}
              </Typography>
            )}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
