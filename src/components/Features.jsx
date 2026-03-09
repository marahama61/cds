import { Box, Grid, Typography, Paper } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import StarIcon from "@mui/icons-material/Star";

function Features() {

  const features = [
    {
      icon: <DirectionsCarIcon sx={{ fontSize: 40, color: "white" }} />,
      title: "Professional Instructors",
      description:
        "Learn from certified driving instructors with years of experience."
    },
    {
      icon: <EventAvailableIcon sx={{ fontSize: 40, color: "white" }} />,
      title: "Easy Online Booking",
      description:
        "Book your driving lesson online in just a few clicks."
    },
    {
      icon: <VerifiedUserIcon sx={{ fontSize: 40, color: "white" }} />,
      title: "Verified Profiles",
      description:
        "All instructors are verified for quality and safety."
    },
    {
      icon: <StarIcon sx={{ fontSize: 40, color: "white" }} />,
      title: "Top Rated Lessons",
      description:
        "Read real reviews from students before choosing an instructor."
    }
  ];

  return (
    <Box sx={{ py: 10, px: 3, background: "#d1d9e0" }}>

      <Typography
        variant="h4"
        textAlign="center"
        fontWeight="bold"
        mb={2}
      >
        Why Choose Our Platform
      </Typography>

      <Typography
        textAlign="center"
        color="text.secondary"
        mb={7}
      >
        Everything you need to find and book the perfect driving instructor.
      </Typography>

      <Grid container spacing={4} justifyContent="center">

        {features.map((feature, index) => (

          <Grid item xs={12} sm={6} md={3} key={index}>

            <Paper
              elevation={0}
              sx={{
                p: 4,
                textAlign: "center",
                borderRadius: 3,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                }
              }}
            >

              <Box
                sx={{
                  width: 70,
                  height: 70,
                  borderRadius: "50%",
                  background: "#0D47A1",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  mb: 3
                }}
              >
                {feature.icon}
              </Box>

              <Typography variant="h6" fontWeight="bold" mb={1}>
                {feature.title}
              </Typography>

              <Typography color="text.secondary">
                {feature.description}
              </Typography>

            </Paper>

          </Grid>

        ))}

      </Grid>
    </Box>
  );
}

export default Features;
