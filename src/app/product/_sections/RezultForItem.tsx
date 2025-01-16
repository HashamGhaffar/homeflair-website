"use client";
import React from "react";
import { Box, Grid, CircularProgress, Typography } from "@mui/material";
import { colorTheme } from "@/_utils/themes";
import FreshArrivalsCard from "../_components/FreshArrivalsCard";
import CustomPagination from "../_components/CustomPagination";
import Header from "../_components/Header";
import { Product } from "@/types/product";
import { formatPrice } from "@/_utils/helpers";

export default function RezultForItem({
  products,
  loading,
}: {
  products: Product[];
  loading: boolean;
}) {
  return (
    <Box
      sx={{
        backgroundColor: colorTheme.white,
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
          margin: "auto",
        }}
      >
        {/* Header */}
        <Header />

        {/* Loading State */}
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "300px",
            }}
          >
            <CircularProgress size={60} color="secondary" />
          </Box>
        ) : products.length === 0 ? (
          // Empty State
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "300px",
            }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "600",
                color: colorTheme.darkCharcoal,
              }}
            >
              No products found.
            </Typography>
          </Box>
        ) : (
          // Product Grid
          <Grid container spacing={3}>
            {products.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <FreshArrivalsCard
                  imageSrc={product.mainImage}
                  productName={product.name}
                  details={product.subcategory
                    .map((subcategory) =>
                      typeof subcategory === "string"
                        ? subcategory
                        : subcategory.name
                    )
                    .join(", ")}
                  currentPrice={formatPrice(product.price)}
                  buttonText={"Go To Shop"}
                />
              </Grid>
            ))}
          </Grid>
        )}

        {/* Pagination */}
        {!loading && products.length > 0 && (
          <Box
            sx={{
              paddingTop: {
                xs: "40px",
                sm: "50px",
                md: "50px",
                lg: "70px",
              },
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <CustomPagination count={3} />
          </Box>
        )}
      </Box>
    </Box>
  );
}
