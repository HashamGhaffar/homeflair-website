import React from "react";
import { Box, Typography, Grid, Button, Divider } from "@mui/material";
import { colorTheme, fontSize } from "@/_utils/themes";
import Image from "next/image";
import pngs from "@/_assets/pngs";
import CustomButton from "@/_components/Button";

export default function Detail() {
  const rowBox = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: { xs: "20px", sm: "50px" },
    marginBottom: "20px",
  };
  const headingStyles = {
    fontSize: fontSize.p2,
    fontWeight: "700",
    color: colorTheme.forestShadow,
    flexShrink: 0,
    maxWidth: "100px",
    width: "100%",
  };

  const textStyles = {
    fontSize: fontSize.p3,
    color: colorTheme.forestShadow,
    flexGrow: 1,
    maxWidth: "400px",
  };

  return (
    <Box
      sx={{
        background: `linear-gradient(90deg, ${colorTheme.softWhite} 0%, ${colorTheme.lightSilver} 100%)`,
        padding: {
          xs: "0px 20px 20px 20px",
          sm: "0px 40px 40px 40px",
          md: "0px 60px 60px 60px",
        },
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Typography
          sx={{
            color: colorTheme.red,
            fontSize: fontSize.h6,
            fontWeight: "700",
            marginBottom: { xs: "20px", sm: "40px" },
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          detail
        </Typography>

        <Grid container spacing={4}>
          {/* Left Side Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                paddingRight: { md: "32px" },
                borderRight: { md: `1px solid ${colorTheme.softCharcoal}` },
              }}
            >
              <Box sx={{ ...rowBox }}>
                <Typography sx={{ ...headingStyles }}>ITEM:</Typography>
                <Typography sx={{ ...textStyles }}>
                  BEATRIX FABRIC SOFA COLLECTION | BUOYANT UPHOLSTERY
                </Typography>
              </Box>

              <Box sx={{ ...rowBox }}>
                <Typography sx={{ ...headingStyles }}>COLOR:</Typography>
                <Box sx={{ height: "50px", width: "50px" }}>
                  <Image
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "contain",
                    }}
                    src={pngs.RedColor}
                    alt="red color"
                  />
                </Box>
              </Box>

              <Box sx={{ ...rowBox }}>
                <Typography sx={{ ...headingStyles }}>
                  SCATTER FABRIC:
                </Typography>
                <Box sx={{ height: "50px", width: "50px" }}>
                  <Image
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "contain",
                    }}
                    src={pngs.Fabric}
                    alt="red color"
                  />
                </Box>
              </Box>

              <Box sx={{ ...rowBox }}>
                <Typography sx={{ ...headingStyles }}>BODY FABRIC:</Typography>
                <Box sx={{ height: "50px", width: "50px" }}>
                  <Image
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "contain",
                    }}
                    src={pngs.Fabric}
                    alt="red color"
                  />
                </Box>
              </Box>

              <Box sx={{ ...rowBox }}>
                <Typography sx={{ ...headingStyles }}>SEATER:</Typography>
                <Typography sx={{ ...textStyles }}>2 Seater</Typography>
              </Box>

              <Divider
                sx={{
                  border: "1px solid #2F302C33",
                  marginBottom: "20px",
                  display: { xs: "none", md: "block" },
                }}
              />
              {/* divider line */}

              <Box sx={{ ...rowBox }}>
                <Typography sx={{ ...headingStyles }}>TOTAL PRICE:</Typography>
                <Typography
                  sx={{
                    fontSize: fontSize.p2,
                    fontWeight: "700",
                    color: colorTheme.red,
                  }}
                >
                  £928
                </Typography>
              </Box>

              <Box sx={{ ...rowBox }}>
                <Typography sx={{ ...headingStyles }}>QUANTITY:</Typography>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      minWidth: "30px",
                      backgroundColor: colorTheme.red,
                    }}
                  >
                    -
                  </Button>
                  <Typography sx={{ ...textStyles }}>1</Typography>
                  <Button
                    variant="contained"
                    sx={{
                      minWidth: "30px",
                      backgroundColor: colorTheme.red,
                    }}
                  >
                    +
                  </Button>
                </Box>
              </Box>
            </Box>
            <CustomButton text="ADD TO CART" />
          </Grid>

          {/* Right Side Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: "100%",
                height: "auto",
                border: `1px solid ${colorTheme.dimAsh}`,
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              <Image
                src={pngs.BeatrixFabricSofa}
                alt="Beatrix Fabric Sofa"
                layout="responsive"
                width={600}
                height={400}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
