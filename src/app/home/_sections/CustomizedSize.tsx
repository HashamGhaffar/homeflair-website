import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { colorTheme, fontSize } from "@/_utils/themes";
import pngs from "@/_assets/pngs";

const textStyles = {
  fontFamily: "Lato",
  fontSize: fontSize.p3,
  fontWeight: "700",
  textAlign: "center",
  marginTop: "10px",
};

const items = [
  { src: pngs.TwoSeaterSofas, label: "2 SEATER SOFAS" },
  { src: pngs.ThreeSeaterSofas, label: "3 SEATER SOFAS" },
  { src: pngs.FourSeaterSofas, label: "4 SEATER SOFAS" },
  { src: pngs.CornerSofas, label: "CORNER SOFAS" },
  { src: pngs.Chairs, label: "CHAIRS" },
  { src: pngs.Footstools, label: "FOOTSTOOLS" },
];

export default function CustomizedSize() {
  return (
    <Box
      sx={{
        backgroundColor: colorTheme.pureFog,
        padding: { xs: "40px", sm: "60px" },
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          color: colorTheme.forestShadow,
          fontSize: fontSize.h6,
          fontWeight: "800",
          marginBottom: { xs: "20px", sm: "40px" },
          fontFamily: "'Playfair Display', serif",
        }}
      >
        Have a Specific Size in Mind?
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: { xs: "30px", lg: "40px" },
        }}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                height: { xs: "95px", md: "128px" },
                width: "auto",
                margin: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={item.src}
                alt="Sofa Collection"
                width={128}
                height={128}
                style={{
                  objectFit: "contain",
                }}
              />
            </Box>
            <Typography sx={{ ...textStyles }}>{item.label}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
