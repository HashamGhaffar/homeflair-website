import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import svgs from "@/_assets/svgs";
import { colorTheme, fontSize } from "@/_utils/themes";

export default function Footer() {
  const textStyles = {
    fontSize: fontSize.p5,
    color: colorTheme.StoneGrey,
  };

  const headingStyles = {
    fontSize: fontSize.p2,
    fontWeight: "800",
    marginBottom: "16px",
    color: colorTheme.forestShadow,
    textTransform: "uppercase",
  };

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        paddingY: "40px",
        paddingX: { xs: "20px", sm: "40px", md: "80px", lg: "100px" },
      }}
    >
      <Box
        sx={{
          maxWidth: "1050px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        {/* Top Section */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            // flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            // alignItems: "flex-start",
            gap: { xs: "30px", sm: "20px" },
          }}
        >
          {/* Logo Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", sm: "flex-start" },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <Image
              src={svgs.Logo}
              alt="Homeflair Logo"
              width={110}
              height={60.28}
              style={{ objectFit: "contain" }}
            />
          </Box>

          {/* Company Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", sm: "flex-start" },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <Typography sx={{ ...headingStyles }}>Company</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <Typography sx={{ ...textStyles }}>Home</Typography>
              <Typography sx={{ ...textStyles }}>About</Typography>
              <Typography sx={{ ...textStyles }}>Products</Typography>
              <Typography sx={{ ...textStyles }}>Contact</Typography>
            </Box>
          </Box>

          {/* Help Center Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", sm: "flex-start" },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <Typography sx={{ ...headingStyles }}>Help Center</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <Typography sx={{ ...textStyles }}>Order Information</Typography>
              <Typography sx={{ ...textStyles }}>Shipping Options</Typography>
              <Typography sx={{ ...textStyles }}>
                International Shipping
              </Typography>
              <Typography sx={{ ...textStyles }}>Payment Options</Typography>
            </Box>
          </Box>

          {/* Contact Us Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              // alignItems: { xs: "center", sm: "flex-start" },
              alignItems: "flex-start",
            }}
          >
            <Typography sx={{ ...headingStyles }}>Contact Us</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Image
                src={svgs.Location}
                alt="Location"
                width={20}
                height={20}
              />
              <Typography
                sx={{ ...textStyles, maxWidth: { xs: "120px", sm: "220px" } }}
              >
                Parkgate Complex, Rawmarsh Rd, Rotherham S60 1RZ
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", alignItems: "center", gap: "8px", mt: 1 }}
            >
              <Image src={svgs.Email} alt="Email" width={20} height={20} />
              <Typography sx={{ ...textStyles }}>
                sales@homeflair.com
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", alignItems: "center", gap: "8px", mt: 1 }}
            >
              <Image src={svgs.Phone} alt="Phone" width={20} height={20} />
              <Typography sx={{ ...textStyles }}>01709376633</Typography>
            </Box>
          </Box>
        </Box>

        {/* Bottom Section */}
        <Box
          sx={{
            borderTop: "1px solid #e0e0e0",
            paddingTop: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
            marginTop: "20px",
          }}
        >
          <Typography sx={{ fontSize: "14px", color: "#666" }}>
            © 2023 Homeflair. All rights reserved.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "16px",
            }}
          >
            <Image src={svgs.Facebook} alt="Facebook" width={20} height={20} />
            <Image src={svgs.Twitter} alt="Twitter" width={20} height={20} />
            <Image
              src={svgs.Instagram}
              alt="Instagram"
              width={20}
              height={20}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
