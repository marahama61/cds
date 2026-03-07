import { Box, Typography, Link } from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

function TopBar() {
  return (
    <Box
      sx={{
        background: "#0f172a",
        color: "#fff",
        px: 6,
        py: 1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: 14
      }}
    >

      {/* Left Side */}
      <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <SupportAgentIcon sx={{ fontSize: 18 }} />
          <Typography>Support</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <EmailIcon sx={{ fontSize: 18 }} />
          <Typography>support@driveschool.com</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <PhoneIcon sx={{ fontSize: 18 }} />
          <Typography>+966 555 000 000</Typography>
        </Box>

      </Box>

      {/* Right Side */}
      <Box sx={{ display: "flex", gap: 3 }}>

        <Link
          href="#"
          underline="none"
          sx={{
            color: "#fff",
            fontWeight: 500,
            "&:hover": {
              color: "#38bdf8"
            }
          }}
        >
          Learner Login
        </Link>

        <Link
          href="#"
          underline="none"
          sx={{
            color: "#fff",
            fontWeight: 500,
            "&:hover": {
              color: "#38bdf8"
            }
          }}
        >
          Instructor Login
        </Link>

      </Box>

    </Box>
  );
}

export default TopBar;