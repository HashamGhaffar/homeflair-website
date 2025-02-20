"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Stepper,
  Step,
  StepLabel,
  Button,
} from "@mui/material";
import { colorTheme, fontSize } from "@/_utils/themes";
import OrderSummary from "@/_components/OrderSummery";
import UserInfo, { UserInfoFormValues } from "../_components/UserInfo";
import CheckoutIntegrationSample from "./CheckoutIntegrationSample";
import { Cart, CartItem } from "@/types/cart";
import { createOrder, CreateOrderRequest } from "@/services/orderApi";

function CustomStepPanel({
  children,
  activeStep,
  stepIndex,
}: {
  children: React.ReactNode;
  activeStep: number;
  stepIndex: number;
}) {
  return (
    <Box
      role="tabpanel"
      hidden={activeStep !== stepIndex}
      sx={{ display: activeStep === stepIndex ? "block" : "none", mt: 2 }}
    >
      {children}
    </Box>
  );
}

export default function UserDetails({
  cartItems,
  cartData,
}: {
  cartItems: CartItem[];
  cartData: Cart | null;
}) {
  const [activeStep, setActiveStep] = useState(0);
  const [isUserInfoValid, setIsUserInfoValid] = useState(false);

  const steps = ["User Information", "Payment Details"];

  const handleUserInfoValidation = async (
    isValid: boolean,
    data: UserInfoFormValues
  ) => {
    setIsUserInfoValid(isValid);
    handleNext();
    // await handleCreateOrder(data);
  };

  const handleNext = () => {
    if (activeStep === 0 && isUserInfoValid) {
      setActiveStep(1);
    }
  };

  const handleCreateOrder = async (data: UserInfoFormValues) => {
    try {
      const sessionId = localStorage.getItem("sessionId") ?? "";

      const orderData: CreateOrderRequest = {
        sessionId,
        paymentMethod: "card",
        email: data?.email ?? "",
        firstName: data?.firstName ?? "",
        lastName: data?.lastName ?? "",
        phone: data?.phoneNumber ?? "",
        billingAddress: {
          street: data?.address ?? "",
          city: data?.town ?? "",
          state: data?.state ?? "",
          postalCode: data?.postCode ?? "",
          country: data?.country ?? "",
          address: data?.address ?? "",
        },
      };

      await createOrder(orderData);
      handleNext();
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  console.log(activeStep, "activeStep");
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
            "& span": {
              fontFamily: "'Playfair Display', serif",
              color: colorTheme.forestShadow,
              fontWeight: "800",
            },
          }}
        >
          <span>check Out</span> / {cartItems?.length} Items
        </Typography>
        <Grid container spacing={4} alignItems={"flex-start"}>
          <Grid item xs={12} md={8}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label, index) => (
                <Step key={index}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            {/* Step 1: User Information */}
            <CustomStepPanel activeStep={activeStep} stepIndex={0}>
              <UserInfo
                onValidate={handleUserInfoValidation}
                onNext={() => {
                  if (isUserInfoValid) {
                    handleNext();
                  }
                }}
              />
            </CustomStepPanel>

            <CustomStepPanel activeStep={activeStep} stepIndex={1}>
              <Typography>Payment Details (Dummy Data)</Typography>
              <CheckoutIntegrationSample />

              <Box sx={{ textAlign: "right", mt: 4 }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => alert("Purchase Complete!")}
                >
                  Finish
                </Button>
              </Box>
            </CustomStepPanel>
          </Grid>

          <Grid item xs={12} md={4}>
            <OrderSummary cartData={cartData} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
