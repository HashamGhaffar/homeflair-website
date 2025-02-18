"use client";
import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { colorTheme, fontSize } from "@/_utils/themes";
import ProductDetails from "../_components/ProductDetails";
import OrderSummary from "@/_components/OrderSummery";
import { CartItem, Cart } from "@/types/cart";

export default function OrderDetail({
  cartItems,
  cartData,
  handleDeleteItem,
}: {
  cartItems: CartItem[];
  cartData: Cart | null;
  handleDeleteItem: (itemId: string) => void;
}) {
  return (
    <Box
      sx={{
        padding: {
          xs: "40px 20px",
          sm: "50px 30px",
          md: "50px 100px",
          lg: "70px 120px",
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
            fontSize: fontSize.h6,
            color: colorTheme.subtleGrey,
            marginBottom: { xs: "30px", sm: "40px", md: "60px" },
            textTransform: "uppercase",
          }}
        >
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              color: colorTheme.forestShadow,
              fontWeight: "800",
            }}
          >
            Checkout
          </span>{" "}
          / {cartItems.length} Items
        </Typography>

        <Grid container spacing={4} alignItems={"center"}>
          <Grid item xs={12} md={8}>
            {cartItems.map((item) => (
              <Box
                key={item._id}
                sx={{ paddingTop: { xs: "40px", md: "60px", xl: "80px" } }}
              >
                <ProductDetails
                  heading={item.productId.name}
                  mainImage={item.productId.mainImage}
                  price={`£${item.totalPrice}`}
                  selectedOptions={item.selectedOptions ?? {}}
                  onDelete={() => handleDeleteItem(item._id)} // Pass the onDelete callback
                />
              </Box>
            ))}
          </Grid>

          {cartItems.length > 0 && (
            <Grid item xs={12} md={4}>
              <OrderSummary cartData={cartData} />
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
  );
}
