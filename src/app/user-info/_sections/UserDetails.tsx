"use client";
import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { colorTheme, fontSize } from "@/_utils/themes";
import OrderSummary from "@/_components/OrderSummery";
import NavigationCustomTabs from "../_components/HeaderCustomTabs";
import UserInfo from "../_components/UserInfo";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function CustomTabPanel({
  children,
  value,
  index,
}: {
  children: React.ReactNode;
  value: number;
  index: number;
}) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

export default function UserDetails() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
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
          }}
        >
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              color: colorTheme.forestShadow,
              fontWeight: "800",
            }}
          >
            Cart
          </span>{" "}
          / 2 Items
        </Typography>

        <Grid container spacing={4} alignItems={"flex-start"}>
          <Grid item xs={12} md={8}>
            <Box>
              {/* </Tabs> */}
              <Box>
                <NavigationCustomTabs
                  value={tabValue}
                  handleChange={handleTabChange}
                />
              </Box>
              {/* details */}

              {/* item 1 detail */}
              <CustomTabPanel value={tabValue} index={0}>
                <UserInfo />
              </CustomTabPanel>

              {/* item 2 detail */}
              <CustomTabPanel value={tabValue} index={1}>
                <Typography>Shipping Details Content</Typography>
              </CustomTabPanel>

              {/* item 3 detail */}
              <CustomTabPanel value={tabValue} index={2}>
                <Typography sx={{ marginBottom: "16px" }}>
                  Please provide your payment details below to complete the
                  purchase. We support various secure payment options.
                </Typography>
              </CustomTabPanel>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <OrderSummary />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
