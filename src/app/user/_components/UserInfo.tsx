import React from "react";
import { Box } from "@mui/material";
import StandardInput from "@/_components/StandardInput";

const UserInfo: React.FC = () => {
  const inputBox = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: { xs: "column", sm: "row" },
    gap: { xs: "10px", lg: "20px" },
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: "10px", lg: "20px", xl: "40px" },
          height: "100%",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ ...inputBox }}>
          <StandardInput
            label="First Name"
            onChange={(e) => console.log(e.target.value)}
          />
          <StandardInput
            label="Last Name"
            onChange={(e) => console.log(e.target.value)}
          />
        </Box>
        <Box sx={{ ...inputBox }}>
          <StandardInput
            label="Company Name"
            onChange={(e) => console.log(e.target.value)}
          />
          <StandardInput
            label="Country / Region"
            onChange={(e) => console.log(e.target.value)}
          />
        </Box>
        <StandardInput
          label="Address"
          onChange={(e) => console.log(e.target.value)}
        />
        <Box sx={{ ...inputBox }}>
          <StandardInput
            label="Town / City"
            onChange={(e) => console.log(e.target.value)}
          />
          <StandardInput
            label="Post Code"
            type="number"
            onChange={(e) => console.log(e.target.value)}
          />
        </Box>
        <Box sx={{ ...inputBox }}>
          <StandardInput
            label="Phone Number"
            type="number"
            inputProps={{
              min: 1,
            }}
            onChange={(e) => {
              const value = e.target.value;
              if (value.length > 10) return;
              console.log(value);
            }}
          />
          <StandardInput
            label="Email"
            type="email"
            onChange={(e) => console.log(e.target.value)}
          />
        </Box>
      </Box>
    </>
  );
};

export default UserInfo;
