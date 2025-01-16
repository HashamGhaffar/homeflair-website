"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { Box, Grid, CircularProgress, Typography } from "@mui/material";
import { colorTheme } from "@/_utils/themes";
import FreshArrivalsCard from "../_components/FreshArrivalsCard";
import CustomPagination from "../_components/CustomPagination";
import Header from "../_components/Header";
import { Product } from "@/types/product";
import { formatPrice } from "@/_utils/helpers";
import { getProductsByTag } from "@/services/productApi";

export default function RezultForItem() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const tags = searchParams.get("tags")?.replace(/['"]+/g, ""); // Remove quotes if any

      if (tags) {
        setLoading(true);
        try {
          const data = await getProductsByTag(tags);
          setProducts(data);
        } catch (error) {
          console.error("Error fetching products:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchProducts();
  }, [searchParams]);
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
            <CustomPagination count={2} />
          </Box>
        )}
      </Box>
    </Box>
  );
}
