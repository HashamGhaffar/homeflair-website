"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Box, Grid, CircularProgress, Typography } from "@mui/material";
import { colorTheme } from "@/_utils/themes";
import FreshArrivalsCard from "../_components/FreshArrivalsCard";
import CustomPagination from "../_components/CustomPagination";
import Header from "../_components/Header";
import { Product } from "@/types/product";
import { formatPrice } from "@/_utils/helpers";
import { getProductsByTag } from "@/services/productApi";

export interface FilterState {
  furniture: string[];
  seaters: string[];
  material: string[];
  priceRange: number[];
}

export default function RezultForItem() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const [filters, setFilters] = useState<FilterState>({
    furniture: [],
    seaters: [],
    material: [],
    priceRange: [100, 5000],
  });

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    const furniture = params.get("furniture")?.split(",") || [];
    const seaters = params.get("seaters")?.split(",") || [];
    const material = params.get("material")?.split(",") || [];
    const minPrice = parseInt(params.get("minPrice") || "100");
    const maxPrice = parseInt(params.get("maxPrice") || "5000");

    setFilters({
      furniture,
      seaters,
      material,
      priceRange: [minPrice, maxPrice],
    });

    fetchProducts({
      furniture,
      seaters,
      material,
      priceRange: [minPrice, maxPrice],
    });
  }, [searchParams]);

  const fetchProducts = async (appliedFilters: FilterState) => {
    console.log(appliedFilters, "filters");
    setLoading(true);
    try {
      const tags = "In Stock";
      const data = await getProductsByTag(tags);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };
  const applyFilters = () => {
    const params = new URLSearchParams();

    if (filters.furniture.length > 0) {
      params.set("furniture", filters.furniture.join(","));
    }
    if (filters.seaters.length > 0) {
      params.set("seaters", filters.seaters.join(","));
    }
    if (filters.material.length > 0) {
      params.set("material", filters.material.join(","));
    }
    params.set("minPrice", filters.priceRange[0].toString());
    params.set("maxPrice", filters.priceRange[1].toString());

    router.push(`/product?${params.toString()}`);
    fetchProducts(filters);
  };

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
      <Box sx={{ maxWidth: "1200px", margin: "auto" }}>
        <Header
          filters={filters}
          setFilters={setFilters}
          applyFilters={applyFilters}
        />

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
