import React from "react";
import { Box, Typography, Divider, TextField } from "@mui/material";
import CustomButton from "@/_components/Button";
import { colorTheme, fontSize } from "@/_utils/themes";

const OrderSummary: React.FC = () => {
  return (
    <Box
      sx={{
        border: `1px solid ${colorTheme.red}`,
        borderRadius: "8px",
        padding: "30px",
        width: "100%",
      }}
    >
      <Typography
        sx={{
          fontSize: fontSize.h6,
          fontWeight: "700",
          color: colorTheme.red,
          marginBottom: "20px",
        }}
      >
        Order Summary
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: fontSize.p3,
              color: colorTheme.forestShadow,
            }}
          >
            Price:
          </Typography>
          <Typography
            sx={{
              fontSize: fontSize.p3,
              color: colorTheme.forestShadow,
            }}
          >
            £319.98
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: fontSize.p3,
              color: colorTheme.forestShadow,
            }}
          >
            Discount:
          </Typography>
          <Typography
            sx={{
              fontSize: fontSize.p3,
              color: colorTheme.forestShadow,
            }}
          >
            £31.9
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: fontSize.p3,
              color: colorTheme.forestShadow,
            }}
          >
            Shipping:
          </Typography>
          <Typography
            sx={{
              fontSize: fontSize.p3,
              color: colorTheme.forestShadow,
            }}
          >
            Free
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: fontSize.p3,
              color: colorTheme.forestShadow,
            }}
          >
            Coupon Applied:
          </Typography>
          <Typography
            sx={{
              fontSize: fontSize.p3,
              color: colorTheme.forestShadow,
            }}
          >
            £0.00
          </Typography>
        </Box>
        <Divider
          sx={{
            borderColor: "#919290",
            width: "100%",
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: fontSize.p3,
              color: colorTheme.forestShadow,
            }}
          >
            TOTAL:
          </Typography>
          <Typography
            sx={{
              fontSize: fontSize.p3,
              color: colorTheme.forestShadow,
            }}
          >
            £288.08
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: fontSize.p3,
              color: colorTheme.forestShadow,
            }}
          >
            Estimated Delivery by
          </Typography>
          <Typography
            sx={{
              fontSize: fontSize.p3,
              color: colorTheme.forestShadow,
            }}
          >
            01 Feb, 2023
          </Typography>
        </Box>
        <TextField
          placeholder="Coupon Code"
          size="small"
          fullWidth
          sx={{
            marginTop: "10px",
            marginBottom: "10px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#919290",
              },
              "&:hover fieldset": {
                borderColor: "#919290",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#919290",
              },
            },
          }}
        />
        <CustomButton
          text="Proceed to Checkout"
          customStyles={{
            width: "100%",
            paddingY: "16px",
          }}
        />
      </Box>
    </Box>
  );
};

export default OrderSummary;
