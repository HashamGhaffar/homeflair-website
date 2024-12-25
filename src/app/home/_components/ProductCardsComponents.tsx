import React from "react";
import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { colorTheme, fontSize } from "@/_utils/themes";

export interface FreshArrivalsCardProps {
  imageSrc: string | StaticImageData;
  productName: string;
  details: string;
  price: string;
}

export function FreshArrivalsCard({
  imageSrc,
  productName,
  details,
  price,
}: FreshArrivalsCardProps): JSX.Element {
  return (
    <Box
      sx={{
        width: { xs: "240px", sm: "290px" },
        overflow: "hidden",
        margin: "auto",
        color: colorTheme.red,
      }}
    >
      <Box
        sx={{
          height: { xs: "219.31px", sm: "265px" },
          width: { xs: "240px", sm: "290px" },
          marginBottom: { xs: "10px", sm: "18px" },
        }}
      >
        <Image
          style={{
            height: "100%",
            width: "100%",
            objectFit: "contain",
          }}
          src={imageSrc}
          alt="product image"
        />
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: fontSize.p5,
            color: colorTheme.softSilver,
          }}
        >
          {productName}
        </Typography>
        <Typography
          sx={{
            fontSize: fontSize.p3,
            color: colorTheme.darkCharcoal,
            fontWeight: "700",
            textTransform: "uppercase",
          }}
        >
          {details}
        </Typography>
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: fontSize.p3,
            color: colorTheme.forestShadow,
          }}
        >
          {price}
        </Typography>
      </Box>
    </Box>
  );
}
