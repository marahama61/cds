import { Box, Typography, Button } from "@mui/material";

function CTA() {
  return (
    <Box
      sx={{
        py: 10,
        textAlign: "center",
        backgroundColor: "#0D47A1",
        color: "white"
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Ready to Start Your Driving Lessons?
      </Typography>

      <Typography variant="h6" mb={4}>
        Find the best driving instructor near you and book your lesson today.
      </Typography>

      <Button
        variant="contained"
        size="large"
        sx={{
          backgroundColor: "#ff9800",
          color: "black",
          fontWeight: "bold"
        }}
      >
        Book a Lesson
      </Button>

    </Box>
  );
}

export default CTA;