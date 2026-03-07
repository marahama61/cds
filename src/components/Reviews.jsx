import { Box, Typography, Card, CardContent } from "@mui/material";

function Reviews() {
  return (
    <Box sx={{ p: 6 }}>

      <Typography variant="h4" textAlign="center" mb={4}>
        Student Reviews
      </Typography>

      <Box sx={{ display: "flex", gap: 4, justifyContent: "center" }}>

        {[1,2,3].map((review) => (

          <Card key={review} sx={{ width: 300 }}>

            <CardContent>

              <Typography>
                "Great instructor! I passed my driving test on the first try."
              </Typography>

              <Typography mt={2} fontWeight="bold">
                ⭐⭐⭐⭐⭐
              </Typography>

            </CardContent>

          </Card>

        ))}

      </Box>

    </Box>
  );
}

export default Reviews;
