import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import svgs from "@/_assets/svgs"; // Replace with the correct path
import pngs from "@/_assets/pngs"; // Replace with the correct path
import { colorTheme, fontSize } from "@/_utils/themes";

const ContactInfoCard: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: colorTheme.forestShadow,
        color: colorTheme.white,
        borderRadius: "12px",
        padding: { xs: "20px", md: "30px", lg: "50px" },
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: { xs: "50px", md: "60px", lg: "80px" },
        height: "100%",
        position: "relative",
        maxHeight: { sm: "450px", md: "470px", lg: "650px" },
      }}
    >
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          bottom: { xs: "-2px", lg: "-3px" },
          right: "0",
          height: {
            md: "90px", // Smaller height for extra small screens
            lg: "150px", // Default height for medium and larger screens
          },
          width: {
            md: "90px", // Smaller width for extra small screens
            lg: "150px", // Default width for medium and larger screens
          },
        }}
      >
        <Image
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          src={pngs.ContactUsCard}
          alt="Contact Us"
        />
      </Box>
      {/* Header */}
      <Box>
        <Typography
          sx={{
            fontSize: fontSize.p1,
            fontWeight: "700",
            marginBottom: { xs: "10px", md: "15px", lg: "30px" },
          }}
        >
          CONTACT INFORMATION
        </Typography>
        <Typography
          sx={{
            fontSize: fontSize.p3,
            color: colorTheme.SoftAsh,
          }}
        >
          Say something to start a chat!
        </Typography>
      </Box>

      {/* Contact Details */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: { xs: "18px", md: "30px", lg: "50px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: "10px", md: "30px" },
          }}
        >
          <Image src={svgs.Phone} alt="Phone" width={20} height={20} />
          <Typography sx={{ fontSize: fontSize.p3, color: colorTheme.white }}>
            01709376633
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: "10px", md: "20px" },
          }}
        >
          <Image src={svgs.Email} alt="Phone" width={20} height={20} />
          <Typography sx={{ fontSize: fontSize.p3, color: colorTheme.white }}>
            sales@homeflair.com
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: "10px", md: "20px" },
          }}
        >
          <Image src={svgs.Location} alt="Phone" width={20} height={20} />
          <Typography sx={{ fontSize: fontSize.p3, color: colorTheme.white }}>
            Parkgate Complex, Rawmarsh Rd, Rotherham S60 1RZ
          </Typography>
        </Box>
      </Box>

      {/* Social Icons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <Image src={svgs.Twitter} alt="Twitter" width={20} height={20} />
        <Image src={svgs.Instagram} alt="Instagram" width={20} height={20} />
        <Image src={svgs.Facebook} alt="Facebook" width={20} height={20} />
      </Box>
    </Box>
  );
};

export default ContactInfoCard;
