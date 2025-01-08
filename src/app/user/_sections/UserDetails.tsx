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

export default function UserDetails() {
  const [activeStep, setActiveStep] = useState(0);
  const [isUserInfoValid, setIsUserInfoValid] = useState(false);
  const [userInfoData, setUserInfoData] = useState<UserInfoFormValues | null>(
    null
  );
  // just to remove typscript error from userInfoData
  console.log("User Info Data:", userInfoData);

  const steps = ["User Information", "Shipping Details", "Payment Details"];

  const handleUserInfoValidation = (
    isValid: boolean,
    data: UserInfoFormValues
  ) => {
    setIsUserInfoValid(isValid);
    setUserInfoData(data);
  };

  const handleNext = () => {
    if (activeStep === 0 && isUserInfoValid) {
      setActiveStep(1);
    } else if (activeStep === 1) {
      setActiveStep(2);
    }
  };

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
          <span>Cart</span> / 2 Items
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
              <UserInfo onValidate={handleUserInfoValidation} />
              <Box sx={{ textAlign: "right", mt: 4 }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  disabled={!isUserInfoValid}
                >
                  Next
                </Button>
              </Box>
            </CustomStepPanel>

            {/* Step 2: Shipping Details */}
            <CustomStepPanel activeStep={activeStep} stepIndex={1}>
              <Typography>Shipping Details (Dummy Data)</Typography>
              <Box sx={{ textAlign: "right", mt: 4 }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  Next
                </Button>
              </Box>
            </CustomStepPanel>

            {/* Step 3: Payment Details */}
            <CustomStepPanel activeStep={activeStep} stepIndex={2}>
              <Typography>Payment Details (Dummy Data)</Typography>
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
            <OrderSummary />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
