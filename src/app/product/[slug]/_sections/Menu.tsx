import React from "react";
import { Box, Typography } from "@mui/material";
import { colorTheme, fontSize } from "@/_utils/themes";
// import pngs from "@/_assets/pngs";
import { MenuSlider } from "../_components/MenuSlider";
import { Product } from "@/types/product";

export default function Menu({ product }: { product: Product }) {
  // const colors = Array(15).fill({ image: pngs.RedColor, alt: "Menu Item" });
  // const scatterFabrics = Array(15).fill({
  //   image: pngs.Fabric,
  //   alt: "Menu Item",
  //   fabricName: "Asra Earth",
  // });
  // const bodyFabrics = Array(15).fill({
  //   image: pngs.Fabric,
  //   alt: "Menu Item",
  //   fabricName: "Asra Earth",
  // });

  return (
    <>
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
            margin: "0 auto",
          }}
        >
          {/* color section */}
          {product.attributes?.length > 0 &&
            product.attributes
              .filter((attr) => attr.type !== "model")
              .map((attr, index) => {
                return (
                  <Box key={index}>
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
                      {attr.name}
                    </Typography>
                    <MenuSlider items={attr.options} />
                  </Box>
                );
              })}
        </Box>
      </Box>
    </>
  );
}
