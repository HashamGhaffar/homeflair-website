import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import Image from "next/image";
import { colorTheme, fontSize } from "@/_utils/themes";
import { AttributeOption } from "@/types/product";
import { seaterOptions } from "@/_utils/constants";
import pngs from "@/_assets/pngs";

const textStyles = {
  fontFamily: "Lato",
  fontSize: fontSize.p3,
  fontWeight: "700",
  textAlign: "center",
  marginTop: "10px",
  color: colorTheme.SoftAsh,
};

export default function Seaters({
  options,
  selectedModel,
  setSelectedModel,
}: {
  options: AttributeOption[];
  selectedModel: AttributeOption | null;
  setSelectedModel: React.Dispatch<
    React.SetStateAction<AttributeOption | null>
  >;
}) {
  return (
    <Box
      sx={{
        backgroundColor: { lg: "#2F302C" },
        padding: { lg: "0 60px" },
        marginTop: "-1px",
      }}
    >
      <Box
        sx={{
          background: `linear-gradient(90deg, ${colorTheme.softWhite} 0%, ${colorTheme.lightSilver} 100%)`,
          padding: {
            xs: "40px 20px",
            sm: "50px 30px",
            md: "50px 100px",
            lg: "70px 150px",
          },
          maxWidth: "1440px",
          margin: "0 auto",
        }}
      >
        <Typography
          sx={{
            color: colorTheme.red,
            fontSize: fontSize.h6,
            fontWeight: "700",
            marginBottom: { xs: "20px", sm: "40px" },
            textTransform: "uppercase",
            paddingBottom: {
              xs: "24px",
              sm: "30px",
              md: "30px",
              lg: "42px",
            },
          }}
        >
          seaters
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "center" },
            gap: { xs: "30px", lg: "40px", xl: "60px" },
          }}
        >
          {options.map((item, index) => (
            <Box
              key={index}
              sx={{
                textAlign: "center",
                transition: "transform 0.4s ease-in-out",
                paddingX: "20px",
                "&:hover": {
                  transform: "scale(1.2)",
                },
              }}
              onClick={() => setSelectedModel(item)}
              bgcolor={
                selectedModel?.value === item.value
                  ? colorTheme.softSilver
                  : "transparent"
              }
            >
              <Box
                sx={{
                  height: { xs: "95px", md: "128px" },
                  width: "auto",
                  margin: "auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src={
                    seaterOptions.find((opt) => opt.value === item.value)
                      ?.image ?? pngs.DummyImage
                  }
                  alt="Sofa Collection"
                  width={128}
                  height={128}
                  style={{
                    objectFit: "contain",
                    opacity: "0.6",
                  }}
                />
              </Box>
              <Typography sx={{ ...textStyles }}>{item.label}</Typography>
            </Box>
          ))}
        </Box>
        <Divider
          sx={{
            marginTop: {
              xs: "40px",
              sm: "50px",
              md: "50px",
              lg: "70px",
            },
            borderColor: colorTheme.dimAsh,
            borderWidth: "1px",
            borderStyle: "solid",
            width: "100%",
          }}
        />
      </Box>
    </Box>
  );
}
