import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        background: "#0f172a",
        color: "white",
        p: 4,
        textAlign: "center"
      }}
    >
      <Typography>
        © 2026 Drive School Platform
      </Typography>

      <Typography mt={1}>
        Book driving lessons with professional instructors
      </Typography>

    </Box>
  );
}

export default Footer;
