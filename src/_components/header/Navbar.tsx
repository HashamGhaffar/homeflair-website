"use client";
import React, { useState } from "react";
import { Box, Typography, TextField, Divider } from "@mui/material";
import { colorTheme, fontSize } from "@/_utils/themes";
import Image from "next/image";
import svgs from "@/_assets/svgs";
import { Search as SearchIcon } from "@mui/icons-material";
import { usePathname, useRouter } from "next/navigation";
import ProductNavigation from "./ProductNavigation";

const Navbar: React.FC<{ cartItems?: number }> = ({ cartItems = 0 }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navItems = [
    { icon: svgs.Home, redIcon: svgs.HomeRed, label: "Home", path: "/" },
    {
      icon: svgs.About,
      redIcon: svgs.AboutRed,
      label: "About",
      path: "/about-us",
    },
    {
      icon: svgs.Product,
      redIcon: svgs.ProductRed,
      label: "Product",
      path: "/product",
    },
    {
      icon: svgs.Contact,
      redIcon: svgs.ContactRed,
      label: "Contact",
      path: "/contact-us",
    },
  ];

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
            maxWidth: "1500px",
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

      {/* Hamburger Navigation */}
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
          {navItems.map((item, index) => {
            const isActive = pathname === item.path;
            return (
              <Box
                key={index}
                onClick={() => router.push(item.path)}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "10px",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Image
                  src={isActive ? item.redIcon : item.icon}
                  alt={item.label}
                  width={30}
                  height={30}
                />
                <Typography
                  sx={{
                    fontSize: fontSize.p3,
                    // fontWeight: "600",
                    color: isActive ? "#DC1A2C" : "#FFFFFF80",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2,
                    overflow: "hidden",
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* Background Blur */}
      {isDrawerOpen && (
        <Box
          onClick={() => setIsDrawerOpen(false)}
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
