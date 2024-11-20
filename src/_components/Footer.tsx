import { Box, Typography } from "@mui/material";
export default function Footer() {
  // const textStyles = {
  //   fontSize: font.captionTypography,
  //   color: color.grey,
  //   textWrap: "no-wrap",
  // };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: {
          xs: "30px 20px",
          sm: "40px 50px",
          md: "50px 80px",
          lg: "50px 100px",
          xl: "50px 150px",
        },
      }}
    >
      <Box
        sx={{
          maxWidth: "1600px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: { xs: "30px", md: "40px", lg: "50px" },
        }}
      >
        <Typography sx={{ textAlign: "center" }}>Footer</Typography>
      </Box>
    </Box>
  );
}
