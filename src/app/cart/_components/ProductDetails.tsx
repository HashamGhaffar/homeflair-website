import React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import Image from "next/image";
import { colorTheme, fontSize } from "@/_utils/themes";
import DeleteIcon from "@mui/icons-material/Delete"; // Import the Delete icon

interface ProductDetailsProps {
  heading: string;
  mainImage: string;
  selectedOptions: Record<string, string>;
  price: string;
  onDelete: () => void; // Add a callback function for delete action
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  heading,
  mainImage,
  selectedOptions,
  price,
  onDelete, // Destructure the onDelete prop
}) => {
  return (
    <Box sx={{ position: "relative" }}>
      {" "}
      {/* Add relative positioning to the container */}
      <Grid
        container
        spacing={2}
        sx={{ alignItems: "center", justifyContent: "space-between" }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ height: "160px", width: "160px", margin: "auto" }}>
            <Image
              src={mainImage}
              alt={heading}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
              width={160}
              height={160}
            />
          </Box>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            rowGap: "12px",
            margin: "auto",
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

          {Object.keys(selectedOptions).map((key) => (
            <Box
              key={key}
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
                {key}:
              </Typography>
              <Typography
                sx={{
                  fontSize: fontSize.p3,
                  color: colorTheme.forestShadow,
                  maxWidth: "100px",
                  width: "100%",
                }}
              >
                {selectedOptions[key]}
              </Typography>
            </Box>
          ))}
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
      {/* Delete Icon positioned at the bottom right */}
      <Box
        sx={{
          position: "absolute", // Absolute positioning
          bottom: 0, // Align to the bottom
          right: 0, // Align to the right
        }}
      >
        <IconButton
          onClick={onDelete} // Trigger the onDelete callback
          sx={{ color: colorTheme.forestShadow }} // Style the icon
        >
          <DeleteIcon /> {/* Render the Delete icon */}
        </IconButton>
      </Box>
    </Box>
  );
};

export default ProductDetails;
