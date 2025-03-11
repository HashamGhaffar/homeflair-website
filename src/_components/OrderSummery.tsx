"use client";
import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import CustomButton from "@/_components/Button";
import { colorTheme, fontSize } from "@/_utils/themes";
import { useRouter } from "next/navigation";
import { Cart } from "@/types/cart";

const OrderSummary: React.FC<{ cartData: Cart | null }> = ({ cartData }) => {
  const router = useRouter();
  return (
    <Box
      sx={{
        border: `1px solid ${colorTheme.red}`,
        borderRadius: "8px",
        padding: { xs: "20px", md: "30px", xl: "40px" },
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
            £{cartData?.totalCartPrice}
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
            Flat rate: £89.00
          </Typography>
        </Box>
        <Divider
          sx={{
            borderColor: colorTheme.SoftAsh,
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
            £{cartData?.totalCartPrice && cartData?.totalCartPrice + 89}
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
            {new Date(
              new Date().setDate(new Date().getDate() + 15)
            ).toLocaleDateString()}
          </Typography>
        </Box>
        <Box onClick={() => router.push("check-out")}>
          <CustomButton
            text="Proceed to Checkout"
            customStyles={{
              width: "100%",
              padding: "16px",
              textWrap: "nowrap",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default OrderSummary;
