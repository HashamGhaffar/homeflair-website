"use client";
import React, { useState } from "react";
import { Box, Typography, Divider, TextField } from "@mui/material";
import { colorTheme, fontSize } from "@/_utils/themes";
import Image from "next/image";
import svgs from "@/_assets/svgs";
import { Search as SearchIcon } from "@mui/icons-material";
import ProductNavigation from "./ProductNavigation";
import { useRouter } from "next/navigation";

const Navbar: React.FC<{ cartItems?: number }> = ({ cartItems = 0 }) => {
  const navItems = [
    { icon: svgs.Home, label: "Home", path: "/" },
    { icon: svgs.About, label: "About", path: "/about-us" },
    { icon: svgs.Product, label: "Product", path: "/product" },
    { icon: svgs.Contact, label: "Contact", path: "/contact-us" },
  ];

  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const textStyle = {
    fontSize: fontSize.p3,
    fontWeight: "300",
    color: colorTheme.white,
    overflow: "hidden",
    whiteSpace: "nowrap",
    mb: 2,
    cursor: "pointer",
  };

  const toggleDrawer = (isOpen: boolean) => {
    setIsDrawerOpen(isOpen);
  };

  return (
    <>
      <Box
        sx={{
          padding: {
            xs: "15px 20px",
            md: "20px 50px",
            lg: "20px 90px",
            xl: "20px 120px",
          },
          paddingY: { xs: "15px", md: "20px" },
          backgroundColor: colorTheme.White,
          boxShadow: `0px 4px 10px 0px ${colorTheme.fadeBlack}`,
          color: colorTheme.softCharcoal,
          textTransform: "capitalize",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            maxWidth: "1440px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: {
              xs: "20px",
              md: "50px",
              lg: "90px",
              xl: "120px",
            },
            width: "100%",
          }}
        >
          {/* nav logo  */}
          <Box
            onClick={() => router.push("/")}
            sx={{
              height: "auto",
              width: { xs: "90px", sm: "120px", lg: "140px" },
              cursor: "pointer",
            }}
          >
            <Image
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
              src={svgs.Logo}
              alt="logo"
            />
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },

              gap: { xs: "10px", md: "20px", lg: "30px", xl: "40px" },
              alignItems: "center",
              width: "100%",
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Search"
              fullWidth
              InputProps={{
                endAdornment: <SearchIcon sx={{ color: colorTheme.black }} />,
                style: {
                  borderRadius: "50px",
                },
              }}
              sx={{
                borderRadius: "50px",
                border: `1px solid ${colorTheme.dimAsh}`,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "30px",
                  "&.Mui-focused": {
                    borderColor: colorTheme.darkBlue,
                  },
                },
                "& .MuiOutlinedInput-input": {
                  padding: "14px 18px",
                },
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: { xs: "6px", sm: "15px" },
              alignItems: "center",
            }}
          >
            <div style={{ position: "relative", display: "inline-block" }}>
              {/* Shopping Cart Icon */}
              <Image
                style={{
                  width: "24px",
                  objectFit: "contain",
                  cursor: "pointer",
                }}
                src={svgs.ShoppingCart} // Replace with your actual icon path
                alt="shopping cart"
                onClick={() => router.push("/cart")}
              />

              {/* Badge for Item Count */}
              {cartItems > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-8px", // Adjust to position the badge
                    right: "-8px", // Adjust to position the badge
                    backgroundColor: "red", // Badge color
                    color: "white", // Text color
                    borderRadius: "50%", // Make it circular
                    padding: "2px 6px", // Padding for the badge
                    fontSize: "12px", // Font size
                    fontWeight: "bold", // Bold text
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: "20px", // Ensure the badge has a minimum width
                    height: "20px", // Ensure the badge has a fixed height
                  }}
                >
                  {cartItems}
                </span>
              )}
            </div>

            <Divider
              orientation="vertical"
              sx={{
                width: "1px ",
                height: "24px",
                borderColor: colorTheme.softCharcoal,
              }}
            />
            <Image
              onClick={() => toggleDrawer(!isDrawerOpen)}
              style={{ width: "24px", objectFit: "contain", cursor: "pointer" }}
              src={svgs.Hamburger}
              alt="hamburger"
            />
          </Box>
        </Box>
      </Box>
      <ProductNavigation />

      {/* hamburger nevigation  */}
      <Box
        sx={{
          position: "fixed",
          top: "20px",
          right: "20px",
          // height: "100%",
          width: isDrawerOpen ? "140px" : "0",
          backgroundColor: "#2F302C",
          color: "#FFFFFF80",
          transition: "all .5s ease",
          zIndex: 10,
          borderRadius: "12px",
        }}
      >
        <Box
          sx={{
            display: isDrawerOpen ? "flex" : "none",
            flexDirection: "column",
            rowGap: { xs: "30px", md: "40px" },
            margin: "auto",
            alignItems: "center",
            paddingY: { xs: "60px", md: "120px" },
          }}
        >
          {navItems.map((item, index) => (
            <Box
              onClick={() => router.push(item.path)}
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: "10px",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Image
                style={{ width: "30px" }}
                src={item.icon}
                alt={item.label}
              />
              <Typography
                sx={{ ...textStyle, color: "#FFFFFF80", fontSize: fontSize.p3 }}
              >
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      {/* background blurr  */}
      {isDrawerOpen && (
        <Box
          onClick={() => toggleDrawer(false)}
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: colorTheme.dimAsh,
            zIndex: 5,
            backdropFilter: "blur(10px)",
          }}
        />
      )}
    </>
  );
};

export default Navbar;
