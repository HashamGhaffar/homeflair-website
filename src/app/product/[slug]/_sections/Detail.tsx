import React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import { colorTheme, fontSize } from "@/_utils/themes";
import Image from "next/image";
import CustomButton from "@/_components/Button";
import { AttributeOption, Product } from "@/types/product";

export default function Detail({
  product,
  selectedModel,
  selectedOptions,
}: {
  product: Product | null;
  selectedModel: AttributeOption | null;
  selectedOptions: Record<string, AttributeOption | null> | null;
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

  const getPrice = () => {
    if (!product) return 0;

    const isModelPriceEnabled = product.attributes?.some(
      (attribute) => attribute.type === "model"
    );

    if (isModelPriceEnabled) {
      return selectedModel?.price ?? 0;
    } else {
      return product.price;
    }
  };

  const isAddToCartEnabled = () => {
    if (!product?.attributes) return true; // If no attributes exist, enable add to cart

    return !product.attributes.some((attribute) => {
      if (attribute.type === "model") {
        return !selectedModel; // If no model is selected, disable add to cart
      }
      return !(
        selectedOptions && selectedOptions.hasOwnProperty(attribute.name)
      ); // If an option is missing, disable add to cart
    });
  };

  const addToCart = () => {
    console.log("add this product to cart ");
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
                          <Box sx={{ height: "50px", width: "50px" }}>
                            <Image
                              style={{
                                height: "100%",
                                width: "100%",
                                objectFit: "contain",
                              }}
                              src={
                                getSelectionOption(attr.name)?.image_url ?? ""
                              }
                              alt="red color"
                              width={50}
                              height={50}
                            />
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
                  £{getPrice()}
                </Typography>
              </Box>

              {/* <Box sx={{ ...rowBox }}>
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
              </Box> */}
            </Box>
            <CustomButton
              text="ADD TO CART"
              disabled={!isAddToCartEnabled()}
              onClick={addToCart}
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
