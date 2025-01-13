import React, { useState } from "react";
import { Box, Typography, Radio } from "@mui/material";
import { colorTheme, fontSize } from "@/_utils/themes";

const Shipping: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<string>("free");
  const [selectedDate, setSelectedDate] = useState<string>("");

  const handleMethodChange = (value: string) => {
    setSelectedMethod(value);
  };

  return (
    <Box
      sx={{
        width: "100%",
        margin: "0 auto",
      }}
    >
      <Typography
        sx={{
          fontSize: fontSize.p1,
          fontWeight: "700",
          color: colorTheme.deepBlue,
          marginBottom: "16px",
        }}
      >
        Shipment Method
      </Typography>

      {/* Free Shipping Option */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: { sm: "12px 0" },
          gap: "10px",
          width: "100%",
        }}
        onClick={() => handleMethodChange("free")}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Radio
            checked={selectedMethod === "free"}
            sx={{
              color: colorTheme.subtleGrey,
              "&.Mui-checked": {
                color: colorTheme.red,
              },
            }}
          />
          <Typography
            sx={{
              color: colorTheme.deepBlue,
              fontSize: fontSize.p3,
            }}
          >
            <span style={{ fontWeight: "700" }}>Free</span> Regular Shipment
          </Typography>
        </Box>
        <Typography sx={{ color: colorTheme.deepBlue, fontSize: fontSize.p3 }}>
          01 Feb, 2023
        </Typography>
      </Box>

      {/* Priority Shipping Option */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: { sm: "12px 0" },
          gap: "10px",
        }}
        onClick={() => handleMethodChange("priority")}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Radio
            checked={selectedMethod === "priority"}
            sx={{
              color: colorTheme.subtleGrey,
              "&.Mui-checked": {
                color: colorTheme.red,
              },
            }}
          />
          <Typography
            sx={{
              color: colorTheme.deepBlue,
              fontSize: fontSize.p3,
            }}
          >
            <span style={{ fontWeight: "700" }}>£8.50</span> Priority Shipping
          </Typography>
        </Box>
        <Typography sx={{ color: colorTheme.deepBlue, fontSize: fontSize.p3 }}>
          28 Jan, 2023
        </Typography>
      </Box>

      {/* Schedule Shipping Option */}
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "flex-start", sm: "space-between" },
          alignItems: { xs: "flex-start", sm: "center" },
          padding: { sm: "12px 0" },
          gap: "10px",
          flexDirection: { xs: "column", sm: "row" },
        }}
        onClick={() => handleMethodChange("schedule")}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Radio
            checked={selectedMethod === "schedule"}
            sx={{
              color: colorTheme.subtleGrey,
              "&.Mui-checked": {
                color: colorTheme.red,
              },
            }}
          />
          <Typography
            sx={{
              color: colorTheme.deepBlue,
              fontSize: fontSize.p3,
            }}
          >
            <span style={{ fontWeight: "700" }}>Schedule</span> Choose a date
            that works for you.
          </Typography>
        </Box>
        {selectedMethod === "schedule" && (
          <Box sx={{ fontSize: fontSize.p3 }}>
            <input
              type="date"
              value={selectedDate}
              onChange={(event) => setSelectedDate(event.target.value)}
              style={{
                fontSize: "inherit",
                color: colorTheme.deepBlue,
                minWidth: "120px",
                border: `1px solid ${colorTheme.mediumGrey}`,
                borderRadius: "4px",
                padding: "4px",
              }}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Shipping;
