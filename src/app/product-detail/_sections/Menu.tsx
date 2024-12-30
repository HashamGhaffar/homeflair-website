import React from "react";
import { Box, Typography } from "@mui/material";
import { colorTheme, fontSize } from "@/_utils/themes";
import pngs from "@/_assets/pngs";
import { ColorMenuSlider, FabricMenuSlider } from "../_components/MenuSlider";

export default function Menu() {
  const colors = Array(15).fill({ image: pngs.RedColor, alt: "Menu Item" });
  const scatterFabrics = Array(15).fill({
    image: pngs.Fabric,
    alt: "Menu Item",
    fabricName: "Asra Earth",
  });
  const bodyFabrics = Array(15).fill({
    image: pngs.Fabric,
    alt: "Menu Item",
    fabricName: "Asra Earth",
  });

  return (
    <>
      {/* color section */}
      <Box
        sx={{
          padding: {
            xs: "40px 20px",
            sm: "50px 30px",
            md: "50px 100px",
            lg: "70px 150px",
          },
          background: `linear-gradient(90deg, ${colorTheme.softWhite} 0%, ${colorTheme.lightSilver} 100%)`,
        }}
      >
        <Typography
          sx={{
            fontSize: fontSize.h6,
            fontWeight: "700",
            color: colorTheme.red,
            textTransform: "uppercase",
            marginBottom: "30px",
            paddingBottom: {
              xs: "24px",
              sm: "30px",
              md: "30px",
              lg: "42px",
            },
          }}
        >
          color
        </Typography>
        <ColorMenuSlider items={colors} />
      </Box>
      {/* Scatter Fabrics section  */}
      <Box
        sx={{
          padding: {
            xs: "40px 20px",
            sm: "50px 30px",
            md: "50px 100px",
            lg: "70px 150px",
          },
          background: `linear-gradient(90deg, ${colorTheme.softWhite} 0%, ${colorTheme.lightSilver} 100%)`,
        }}
      >
        <Typography
          sx={{
            fontSize: fontSize.h6,
            fontWeight: "700",
            color: colorTheme.red,
            textTransform: "uppercase",
            marginBottom: "30px",
            paddingBottom: {
              xs: "24px",
              sm: "30px",
              md: "30px",
              lg: "42px",
            },
          }}
        >
          Scatter Fabrics
        </Typography>
        <FabricMenuSlider items={scatterFabrics} />
      </Box>
      {/* body Fabrics section  */}
      <Box
        sx={{
          padding: {
            xs: "40px 20px",
            sm: "50px 30px",
            md: "50px 100px",
            lg: "70px 150px",
          },
          background: `linear-gradient(90deg, ${colorTheme.softWhite} 0%, ${colorTheme.lightSilver} 100%)`,
        }}
      >
        <Typography
          sx={{
            fontSize: fontSize.h6,
            fontWeight: "700",
            color: colorTheme.red,
            textTransform: "uppercase",
            marginBottom: "30px",
            paddingBottom: {
              xs: "24px",
              sm: "30px",
              md: "30px",
              lg: "42px",
            },
          }}
        >
          Asra Earth
        </Typography>
        <FabricMenuSlider items={bodyFabrics} />
      </Box>
    </>
  );
}
