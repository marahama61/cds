import { Box, Card, CardContent, Typography, Button } from "@mui/material";

function Packages() {
  return (
    <Box sx={{ background: "#f5f5f5", p: 6 }}>

      <Typography variant="h4" textAlign="center" mb={4}>
        Driving Lesson Packages
      </Typography>

      <Box sx={{ display: "flex", gap: 4, justifyContent: "center" }}>

        {[
          { lessons: 5, price: "$250" },
          { lessons: 10, price: "$450" },
          { lessons: 20, price: "$800" }
        ].map((pkg) => (

          <Card key={pkg.lessons} sx={{ width: 250 }}>

            <CardContent sx={{ textAlign: "center" }}>

              <Typography variant="h5">
                {pkg.lessons} Lessons
              </Typography>

              <Typography variant="h4" mt={2}>
                {pkg.price}
              </Typography>

              <Button variant="contained" sx={{ mt: 3 }}>
                Book Now
              </Button>

            </CardContent>

          </Card>

        ))}

      </Box>

    </Box>
  );
}

export default Packages;
