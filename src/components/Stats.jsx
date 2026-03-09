import { Box, Grid, Typography } from "@mui/material";

function Stats() {
  return (
    <Box sx={{ py: 8, backgroundColor: "#f4eded" }}>
      <Grid container spacing={4} justifyContent="center">

        <Grid item xs={12} md={3} textAlign="center">
          <Typography variant="h4" fontWeight="bold">
            500+
          </Typography>
          <Typography>
            Driving Instructors
          </Typography>
        </Grid>

        <Grid item xs={12} md={3} textAlign="center">
          <Typography variant="h4" fontWeight="bold">
            10,000+
          </Typography>
          <Typography>
            Students Taught
          </Typography>
        </Grid>

        <Grid item xs={12} md={3} textAlign="center">
          <Typography variant="h4" fontWeight="bold">
            50+
          </Typography>
          <Typography>
            Cities Covered
          </Typography>
        </Grid>

        <Grid item xs={12} md={3} textAlign="center">
          <Typography variant="h4" fontWeight="bold">
            4.9 ★
          </Typography>
          <Typography>
            Average Rating
          </Typography>
        </Grid>

      </Grid>
    </Box>
  );
}

export default Stats;