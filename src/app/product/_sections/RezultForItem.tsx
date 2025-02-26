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
import { getFilteredProducts } from "@/services/productApi";

export interface FilterState {
  furniture: string[];
  seaters: string[];
  material: string[];
  colour: string[];
  priceRange: number[];
}

export default function RezultForItem() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const ROWS_PER_PAGE = 30;
  const [page, setPage] = useState(1);
  const [totalProductCount, setTotalProductCount] = useState(0);

  const [products, setProducts] = useState<Product[]>([]);
  const [selectedSort, setSelectedSort] = useState<string>("name_asc");

  const [loading, setLoading] = useState<boolean>(false);

  const [filters, setFilters] = useState<FilterState>({
    furniture: [],
    seaters: [],
    material: [],
    colour: [],
    priceRange: [100, 5000],
  });

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    const furniture = params.get("furniture")?.split(",") || [];
    const seaters = params.get("seaters")?.split(",") || [];
    const material = params.get("material")?.split(",") || [];
    const colour = params.get("colour")?.split(",") || [];
    const minPrice = parseInt(params.get("minPrice") || "100");
    const maxPrice = parseInt(params.get("maxPrice") || "5000");

    setFilters({
      furniture,
      seaters,
      material,
      colour,
      priceRange: [minPrice, maxPrice],
    });

    fetchProducts({
      furniture,
      seaters,
      material,
      colour,
      priceRange: [minPrice, maxPrice],
    });
  }, [searchParams]);

  const fetchProducts = async (
    appliedFilters: FilterState,
    page = 1,
    selectedSort = "name_asc"
  ) => {
    setLoading(true);
    try {
      const { data, totalCount } = await getFilteredProducts(
        appliedFilters,
        page,
        ROWS_PER_PAGE,
        selectedSort
      );
      setTotalProductCount(totalCount);
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
    if (filters.colour.length > 0) {
      params.set("colour", filters.colour.join(","));
    }
    params.set("minPrice", filters.priceRange[0].toString());
    params.set("maxPrice", filters.priceRange[1].toString());

    router.push(`/product?${params.toString()}`);
    setPage(1);
    fetchProducts(filters, 1, selectedSort);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    fetchProducts(filters, newPage, selectedSort);
  };

  const handleSortChange = (sortValue: string) => {
    setSelectedSort(sortValue);
    fetchProducts(filters, page, sortValue);
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
      <Box sx={{ maxWidth: "1440px", margin: "auto" }}>
        <Header
          filters={filters}
          setFilters={setFilters}
          applyFilters={applyFilters}
          selectedSort={selectedSort}
          handleSortChange={handleSortChange}
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
            <CustomPagination
              cuttentPage={page}
              count={Math.ceil(totalProductCount / ROWS_PER_PAGE)}
              onChange={(_event, value) => {
                handlePageChange(value);
              }}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}
