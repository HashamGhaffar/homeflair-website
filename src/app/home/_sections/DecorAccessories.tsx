import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { colorTheme, fontSize } from "@/_utils/themes";
import Image from "next/image";
import pngs from "@/_assets/pngs";

export default function DecorAccessories() {
  const textStyles = {
    color: colorTheme.forestShadow,
    fontSize: fontSize.h6,
    fontWeight: "600",
    marginBottom: "16px",
  };
  return (
    <Box
      sx={{
        backgroundColor: { lg: "#2F302C" },
        padding: { lg: "0 60px" },
      }}
    >
      <Box
        sx={{
          background: "linear-gradient(90deg, #FDFBFB 0%, #EBEDEE 100%)",
          padding: { xs: "40px 0", sm: "60px 0" },
          maxWidth: "1440px",
          margin: "auto",
        }}
      >
        <Typography
          sx={{
            ...textStyles,
            textAlign: "center",
            fontWeight: "800",
            marginBottom: { xs: "20px", sm: "40px" },
            fontFamily: "'Playfair Display', serif",
            textTransform: "uppercase",
          }}
        >
          DECOR & ACCESSORIES
        </Typography>
        <Box
          sx={{
            maxWidth: "1200px",
            margin: "auto",
          }}
        >
          <Grid container spacing={4}>
            {/* Left Column: Fabric Sofa */}
            <Grid item xs={12} md={6}>
              <Box
                onClick={() => {}}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  height: "100%",
                  alignItems: "center",
                  backgroundColor: "#ffffff",
                  cursor: "pointer",
                  transition: "all .4s ease-in-out",
                  "&:hover": {
                    backgroundColor: "#EBEDEE",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: colorTheme.forestShadow,
                    fontSize: fontSize.h6,
                    fontWeight: "600",
                    marginBottom: "16px",
                    textAlign: "center",
                  }}
                >
                  FABRIC SOFA
                </Typography>

                <Box
                  sx={{
                    width: "100%",
                    maxWidth: "544.5px",
                    height: "auto",
                  }}
                >
                  <Image
                    src={pngs.FabricSofa}
                    alt="Fabric Sofa"
                    width={544.5}
                    height={276.5}
                    style={{
                      objectFit: "contain",
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </Box>
              </Box>
            </Grid>

            {/* Right Column */}
            <Grid item xs={12} md={6}>
              <Grid container spacing={4}>
                <Grid xs={12} sm={6} item>
                  {/* Chair */}
                  <Box
                    onClick={() => {}}
                    sx={{
                      backgroundColor: "#ffffff",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      cursor: "pointer",
                      transition: "all .4s ease-in-out",
                      "&:hover": {
                        backgroundColor: "#EBEDEE",
                      },
                    }}
                  >
                    <Typography sx={{ ...textStyles }}>CHAIR</Typography>
                    <Box
                      sx={{
                        width: "100%",
                        maxWidth: "155.5px",
                        height: "auto",
                      }}
                    >
                      <Image
                        src={pngs.Chair}
                        alt="Chair"
                        width={155.5}
                        height={189}
                        style={{
                          objectFit: "contain",
                          width: "100%",
                          height: "auto",
                        }}
                      />
                    </Box>
                  </Box>
                </Grid>
                {/* Leather Sofa */}
                <Grid xs={12} sm={6} item>
                  <Box
                    onClick={() => {}}
                    sx={{
                      backgroundColor: "#ffffff",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      height: "100%",
                      cursor: "pointer",
                      transition: "all .4s ease-in-out",
                      "&:hover": {
                        backgroundColor: "#EBEDEE",
                      },
                    }}
                  >
                    <Typography sx={{ ...textStyles }}>LEATHER SOFA</Typography>
                    <Box
                      sx={{
                        width: "100%",
                        maxWidth: "188px",
                        height: "100%",
                      }}
                    >
                      <Image
                        src={pngs.LeatherSofa}
                        alt="Leather Sofa"
                        width={188}
                        height={178}
                        style={{
                          objectFit: "contain",
                          width: "100%",
                          height: "auto",
                        }}
                      />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              {/* Accessories */}
              <Grid sx={{ marginTop: "30px" }} item xs={12} md={12}>
                <Box
                  onClick={() => {}}
                  sx={{
                    backgroundColor: "#ffffff",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "all .4s ease-in-out",
                    "&:hover": {
                      backgroundColor: "#EBEDEE",
                    },
                  }}
                >
                  <Typography sx={{ ...textStyles }}>ACCESSORIES</Typography>
                  <Box
                    sx={{
                      width: "100%",
                      maxWidth: "257px",
                      height: "auto",
                    }}
                  >
                    <Image
                      src={pngs.Accessories}
                      alt="Accessories"
                      width={257}
                      height={405}
                      style={{
                        objectFit: "contain",
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
