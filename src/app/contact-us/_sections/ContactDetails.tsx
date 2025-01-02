import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { colorTheme, fontSize } from "@/_utils/themes";
import ContactInfoCard from "../_components/ContactInfoCard";
import ContactUsForm from "../_components/ContactUsForm";

const ContactDetails: React.FC = () => {
  return (
    <Box
      sx={{
        padding: {
          xs: "30px",
          sm: "40px 60px",
          md: "60px 80px",
          lg: "80px 100px",
        },
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          paddingBottom: { xs: "10px", md: "20px", lg: "30px", xl: "40px" },
        }}
      >
        <Typography
          sx={{
            fontSize: fontSize.h6,
            fontWeight: "900",
            fontFamily: "'Playfair Display', serif",
            color: colorTheme.black,
            paddingBottom: { xs: "10px", md: "20px", lg: "30px" },
            textTransform: "uppercase",
          }}
        >
          CONTACT US
        </Typography>
        <Typography
          sx={{
            fontSize: fontSize.p2,
            color: colorTheme.softCharcoal,
          }}
        >
          Any question or remarks? Just write us a message!
        </Typography>
      </Box>

      <Grid
        sx={{
          flexDirection: {
            xs: "column-reverse",
            md: "row",
          },
        }}
        container
        spacing={4}
      >
        <Grid item xs={12} md={5}>
          <ContactInfoCard />
        </Grid>
        <Grid item xs={12} md={7}>
          <ContactUsForm />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactDetails;
