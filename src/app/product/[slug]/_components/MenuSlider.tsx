"use client";
import React from "react";
import { Box, Grid, Typography, Divider } from "@mui/material";
import Image from "next/image";
import { colorTheme, fontSize } from "@/_utils/themes";
import { AttributeOption } from "@/types/product";
import { ProductAttributes } from "../page";

interface MenuSliderProps {
  items: AttributeOption[];
  name: string;

  selectedOptions: ProductAttributes | null;
  setSelectedOptions: React.Dispatch<React.SetStateAction<ProductAttributes>>;
}

export function MenuSlider({
  items,
  name,
  setSelectedOptions,
  selectedOptions,
}: MenuSliderProps) {
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
      {items.map((item, index) => {
        return (
          <Grid
            item
            xs={3}
            sm={2.4}
            md={2.4}
            key={index}
            bgcolor={
              selectedOptions && selectedOptions[name]?.label === item.label
                ? colorTheme.softSilver
                : "transparent"
            }
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                // gap: item.label ? { xs: "6px", sm: "8px", md: "12px" } : 0,
                marginX: "10px",
                paddingY: "10px",
                textAlign: "center",
                transition: "transform 0.4s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
              onClick={() => {
                setSelectedOptions((prev: ProductAttributes) => ({
                  ...prev,
                  [name]: item,
                }));
              }}
            >
              {item?.image_url && (
                <Box
                  sx={{
                    margin: "auto",
                    width: { xs: "50px", sm: "80px", md: "100px" },
                    height: { xs: "50px", sm: "80px", md: "100px" },
                  }}
                >
                  <Image
                    src={item.image_url}
                    alt={item.label ?? ""}
                    layout="responsive"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    width={item.image_url ? 80 : 50}
                    height={item.image_url ? 80 : 50}
                  />
                </Box>
              )}
              {item.label && (
                <Typography
                  sx={{ fontSize: fontSize.p3, color: colorTheme.SoftAsh }}
                >
                  {item.label}
                </Typography>
              )}
            </Box>
          </Grid>
        );
      })}
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
