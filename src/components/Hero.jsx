import { Box, Typography, TextField, Button, MenuItem } from "@mui/material";
import "../Hero.css"
import driving from "../assets/driving.jpg"

function Hero() {
  return (
    <Box 
      sx={{
        position: "relative",
        height: "300px",
        backgroundImage: `url(${driving})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
      }}
    >
      
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.50)", 
          zIndex: 1
        }}
      />

      {/* Content */}
      <Box sx={{ position: "relative", zIndex: 2 }}>

        <Typography
          variant="h3"
          sx={{ color: "white", fontWeight: "bold", mb: 4 }}
        >
          Find the Best Driving Instructor Near You
        </Typography>

        <div className="rating-box">
            <span className="rating-label">G Rated</span>
            <span className="rating-number">4.9</span>

            <span className="stars">
                  ★★★★★
            </span>
            <span className="reviews">(1200+ reviews)</span>
        </div>
        {/* Search Box */}
        <Box
          sx={{
            background: "white",
            p: 3,
            borderRadius: 2,
            display: "flex",
            gap: 2,
            alignItems: "center",
            boxShadow: 4,
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >

          <TextField
            label="Pick-up Location *"
            placeholder="Enter your suburb or postcode"
            sx={{ width: 220 }}
          />

          <TextField
            select
            label="Transmission *"
            defaultValue="auto"
            sx={{ width: 180 }}
          >
            <MenuItem value="auto">Auto</MenuItem>
            <MenuItem value="manual">Manual</MenuItem>
          </TextField>

          <TextField
            label="Test pre-booked?"
            type="date"
            InputLabelProps={{
            shrink: true
            }}
            sx={{ width: 180 }}
          >
          </TextField>

          <Button
            variant="contained"
            size="large"
            sx={{ height: 56 }}
          >
            Search
          </Button>

        </Box>

      </Box>

    </Box>
  );
}

export default Hero;