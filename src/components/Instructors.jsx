import { Box, Card, CardContent, Typography, Avatar } from "@mui/material";

function Instructors() {
  return (
    <Box sx={{ p: 6 }}>

      <Typography variant="h4" textAlign="center" mb={4}>
        Featured Instructors
      </Typography>

      <Box sx={{ display: "flex", gap: 4, justifyContent: "center" }}>

        {[1,2,3].map((item) => (
          <Card key={item} sx={{ width: 250 }}>

            <CardContent sx={{ textAlign: "center" }}>

              <Avatar
                src="/instructor.jpg"
                sx={{ width: 80, height: 80, margin: "auto" }}
              />

              <Typography variant="h6" mt={2}>
                John Smith
              </Typography>

              <Typography color="text.secondary">
                Automatic Instructor
              </Typography>

              <Typography mt={1}>
                ⭐ 4.9
              </Typography>

            </CardContent>

          </Card>
        ))}

      </Box>

    </Box>
  );
}

export default Instructors;
