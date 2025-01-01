import React from "react";
import { Tabs, Tab } from "@mui/material";
import { colorTheme, fontSize } from "@/_utils/themes";

interface CustomTabsProps {
  value: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const NavigationCustomTabs: React.FC<CustomTabsProps> = ({
  value,
  handleChange,
}) => {
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="user details tabs"
      TabIndicatorProps={{ style: { display: "none" } }}
      sx={{
        alignItems: "center",
        "& .MuiTab-root": {
          fontSize: fontSize.p3,
          textTransform: "none",
          color: colorTheme.subtleGrey,
          fontFamily: "'Playfair Display', serif",
          "&.Mui-selected": {
            color: colorTheme.forestShadow,
            fontWeight: "800",
          },
        },
      }}
    >
      <Tab sx={{ paddingLeft: "0px" }} label="User Info" />
      <Tab label="Shipping" />
      <Tab label="Payment" />
    </Tabs>
  );
};

export default NavigationCustomTabs;
