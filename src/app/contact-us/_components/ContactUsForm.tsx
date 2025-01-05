"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import ContactUsInput from "./ContactUsInput";
import { colorTheme, fontSize } from "@/_utils/themes";
import CustomButton from "@/_components/Button";

const ContactUsForm: React.FC = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("General Inquiry");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: { xs: "30px", lg: "40px", xl: "50px" },
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: { xs: "30px", md: "30px" },
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <ContactUsInput
          label="First Name"
          value={name}
          onChange={handleNameChange}
        />
        <ContactUsInput
          label="Last Name"
          value={name}
          onChange={handleNameChange}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: { xs: "30px", md: "30px" },
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <ContactUsInput
          label="Email"
          type="email"
          value={name}
          onChange={handleNameChange}
        />
        <ContactUsInput
          label="Phone Number"
          type="number"
          value={name}
          onChange={handleNameChange}
        />
      </Box>
      <Typography
        sx={{
          color: colorTheme.forestShadow,
          fontSize: "12px",
          fontWeight: "700",
          textTransform: "uppercase",
        }}
      >
        Select Subject
      </Typography>
      <RadioGroup
        row
        value={subject}
        onChange={handleSubjectChange}
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          gap: "20px",
        }}
      >
        {["General Inquiry", "Feedback", "Support", "Others"].map((option) => (
          <FormControlLabel
            key={option}
            value={option}
            control={
              <Radio
                sx={{
                  color: colorTheme.forestShadow,
                  "&.Mui-checked": {
                    color: colorTheme.SoftAsh,
                  },
                  "& .MuiSvgIcon-root": {
                    fontSize: fontSize.p5,
                    width: fontSize.p5,
                    height: fontSize.p5,
                  },
                }}
              />
            }
            label={
              <Typography
                sx={{ fontSize: fontSize.p6, color: colorTheme.forestShadow }}
              >
                {option}
              </Typography>
            }
          />
        ))}
      </RadioGroup>
      <ContactUsInput
        label="Message"
        value={name}
        onChange={handleNameChange}
      />
      <CustomButton
        customStyles={{ borderRadius: "5px" }}
        text="Send Message"
      />
    </Box>
  );
};

export default ContactUsForm;
