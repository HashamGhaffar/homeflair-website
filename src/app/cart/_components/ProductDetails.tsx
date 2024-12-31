import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { colorTheme, fontSize } from "@/_utils/themes";

interface ProductDetailsProps {
  heading: string;
  mainImage: StaticImageData;
  colorImage: StaticImageData;
  scatterFabricImage: StaticImageData;
  bodyFabricImage: StaticImageData;
  seater: string;
  price: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  heading,
  mainImage,
  colorImage,
  scatterFabricImage,
  bodyFabricImage,
  seater,
  price,
}) => {
  return (
    <Box>
      <Grid
        container
        spacing={2}
        sx={{ alignItems: "center", justifyContent: "space-between" }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ height: "160px", width: "160px" }}>
            <Image
              src={mainImage}
              alt={heading}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            rowGap: "12px",
          }}
          item
          xs={12}
          sm={6}
          md={4}
        >
          <Typography
            sx={{
              fontSize: fontSize.p1,
              fontWeight: "700",
              color: colorTheme.forestShadow,
            }}
          >
            {heading}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "60px",
              justifyContent: "flex-start",
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontSize: fontSize.p3,
                color: colorTheme.SoftAsh,
                maxWidth: "100px",
                width: "100%",
              }}
            >
              Color:
            </Typography>
            <Box sx={{ width: "20px", height: "20px" }}>
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                src={colorImage}
                alt="Color"
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "60px",
              justifyContent: "flex-start",
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontSize: fontSize.p3,
                color: colorTheme.SoftAsh,
                maxWidth: "100px",
                width: "100%",
              }}
            >
              Scatter Fabric:
            </Typography>
            <Box sx={{ width: "20px", height: "20px" }}>
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                src={scatterFabricImage}
                alt="Scatter Fabric"
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "60px",
              justifyContent: "flex-start",
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontSize: fontSize.p3,
                color: colorTheme.SoftAsh,
                maxWidth: "100px",
                width: "100%",
              }}
            >
              Body Fabric:
            </Typography>
            <Box sx={{ width: "20px", height: "20px" }}>
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                src={bodyFabricImage}
                alt="Body Fabric"
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "60px",
              justifyContent: "flex-start",
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontSize: fontSize.p3,
                color: colorTheme.SoftAsh,
                maxWidth: "100px",
                width: "100%",
              }}
            >
              Seater:
            </Typography>
            <Typography
              sx={{
                fontSize: fontSize.p3,
                color: colorTheme.forestShadow,
                maxWidth: "100px",
                width: "100%",
              }}
            >
              {seater}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Typography
            sx={{
              fontSize: fontSize.h6,
              fontWeight: "700",
              color: colorTheme.deepBlue,
            }}
          >
            {price}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetails;
