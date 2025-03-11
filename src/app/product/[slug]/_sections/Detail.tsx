import React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import { colorTheme, fontSize } from "@/_utils/themes";
import Image from "next/image";
import CustomButton from "@/_components/Button";
import { AttributeOption, Product } from "@/types/product";
import { getProductPrice } from "@/_utils/helpers";
import pngs from "@/_assets/pngs";

export default function Detail({
  product,
  selectedModel,
  selectedOptions,
  addProductToCart,
}: {
  product: Product | null;
  selectedModel: AttributeOption | null;
  selectedOptions: Record<string, AttributeOption | null> | null;
  addProductToCart: () => void;
}) {
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

  const getSelectionOption = (name: string) => {
    if (selectedOptions && selectedOptions[name]) {
      return selectedOptions[name];
    }
    return null;
  };

  const getSelectionModel = () => {
    if (selectedModel) {
      return selectedModel;
    }
    return null;
  };

  const isAddToCartEnabled = () => {
    if (!product?.attributes) return true;
    return !product.attributes.some((attribute) => {
      if (attribute.type === "model") {
        return !selectedModel;
      }
      return !(
        selectedOptions && selectedOptions.hasOwnProperty(attribute.name)
      );
    });
  };

  return (
    <Box
      sx={{
        backgroundColor: { lg: "#2F302C" },
        padding: { lg: "0 60px" },
        marginTop: "-1px",
      }}
    >
      <Box
        sx={{
          background: `linear-gradient(90deg, ${colorTheme.softWhite} 0%, ${colorTheme.lightSilver} 100%)`,
          padding: {
            xs: "0px 20px 20px 20px",
            sm: "0px 40px 40px 40px",
            md: "0px 60px 60px 60px",
          },
          maxWidth: "1500px",
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
                <Typography sx={{ ...textStyles }}>{product?.name}</Typography>
              </Box>

              {product &&
                product.attributes?.length > 0 &&
                product.attributes.map((attr) => {
                  if (attr.type === "model") {
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <Box sx={{ ...rowBox }}>
                        <Typography sx={{ ...headingStyles }}>
                          {attr.name}:
                        </Typography>
                        {getSelectionModel() && (
                          <Typography sx={{ ...textStyles }}>
                            {getSelectionModel()?.label}
                          </Typography>
                        )}
                      </Box>
                    );
                  } else {
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <Box sx={{ ...rowBox }}>
                        <Typography sx={{ ...headingStyles }}>
                          {attr.name}:
                        </Typography>
                        {getSelectionOption(attr.name) && (
                          <Box
                            sx={{
                              height: "50px",
                              width: "200px",
                              display: "flex",
                              alignItems: "center",
                              gap: 3,
                            }}
                          >
                            <Image
                              style={{
                                height: "100%",
                                width: "100%",
                                objectFit: "contain",
                              }}
                              src={
                                getSelectionOption(attr.name)?.image_url ??
                                pngs.DummyImage
                              }
                              alt="red color"
                              width={50}
                              height={50}
                            />
                            <Typography
                              sx={{
                                ...textStyles,
                                width: "200px",
                              }}
                            >
                              {getSelectionOption(attr.name)?.label}
                            </Typography>
                          </Box>
                        )}
                      </Box>
                    );
                  }
                })}
              <Divider
                sx={{
                  border: `1px solid ${colorTheme.transparentForestShadow}`,
                  marginBottom: "20px",
                  display: { xs: "none", md: "block" },
                }}
              />
              <Box sx={{ ...rowBox }}>
                <Typography sx={{ ...headingStyles }}>TOTAL PRICE:</Typography>
                <Typography
                  sx={{
                    fontSize: fontSize.p2,
                    fontWeight: "700",
                    color: colorTheme.red,
                  }}
                >
                  £{getProductPrice(product, selectedModel)}
                </Typography>
              </Box>
            </Box>
            <CustomButton
              text="ADD TO CART"
              disabled={!isAddToCartEnabled()}
              onClick={addProductToCart}
            />
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
                src={(product && product.mainImage) ?? ""}
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
