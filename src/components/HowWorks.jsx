import { Box, Typography, Grid } from "@mui/material";

function HowWorks() {
  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        How It Works
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={3}>
          <Typography variant="h6">1. Search</Typography>
          <Typography>Find a driving instructor near you.</Typography>
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="h6">2. Book</Typography>
          <Typography>Choose a time and book online.</Typography>
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="h6">3. Learn</Typography>
          <Typography>Start learning with a professional instructor.</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HowWorks;