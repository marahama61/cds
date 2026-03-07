import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import logo from "../assets/logo.svg"

function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  let closeTimer;

  const handleOpen = (menu) => {
    clearTimeout(closeTimer); // منع إغلاق القائمة إذا تحرك الماوس بسرعة
    setOpenMenu(menu);
  };

  const handleClose = () => {
    // تأخير صغير قبل الإغلاق
      closeTimer = setTimeout(() => {
      setOpenMenu(null);
    }, 200);
  };

  return (
    <AppBar position="static" color="white" elevation={1}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* LEFT: Logo + Menu */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
          <img src={logo} alt="logo" style={{ height: 40 }}  />

          {/* Driving Lessons */}
          <Box
            sx={{ position: "relative" }}
            onMouseEnter={() => handleOpen("driving")}
            onMouseLeave={handleClose}
          >
            <Button sx={{ textTransform: "none" }} 
                    endIcon={<KeyboardArrowDownIcon />}>Driving Lessons</Button>

            {openMenu === "driving" && (
              <Box
                sx={dropdownStyle}
                onMouseEnter={() => handleOpen("driving")}
                onMouseLeave={handleClose}
              >
                <Button sx={submenuItem}>Driving Test Packages</Button>
                <Button sx={submenuItem}>Automatic Lessons</Button>
                <Button sx={submenuItem}>Manual Lessons</Button>
              </Box>
            )}
          </Box>

          {/* Locations */}
          <Box
            sx={{ position: "relative" }}
            onMouseEnter={() => handleOpen("locations")}
            onMouseLeave={handleClose}
          >
            <Button sx={{ textTransform: "none" }} 
                    endIcon={<KeyboardArrowDownIcon />}>Locations</Button>
            {openMenu === "locations" && (
              <Box
                sx={dropdownStyle}
                onMouseEnter={() => handleOpen("locations")}
                onMouseLeave={handleClose}
              >
                <Button sx={submenuItem}>Sydney Driving Lessons</Button>
                <Button sx={submenuItem}>Melbourne Driving Lessons</Button>
              </Box>
            )}
          </Box>

          {/* Pricing & Packages */}
          <Button sx={{ textTransform: "none" }} >Pricing & Packages</Button>

          {/* Learner Resources */}
          <Box
            sx={{ position: "relative" }}
            onMouseEnter={() => handleOpen("resources")}
            onMouseLeave={handleClose}
          >
            <Button sx={{ textTransform: "none" }}
                      endIcon={<KeyboardArrowDownIcon />}>Learner Resources</Button>
            {openMenu === "resources" && (
              <Box
                sx={dropdownStyle}
                onMouseEnter={() => handleOpen("resources")}
                onMouseLeave={handleClose}
              >
                <Button sx={submenuItem}>FAQs</Button>
                <Button sx={submenuItem}>Blog</Button>
                <Button sx={submenuItem}>Industry Insights</Button>
              </Box>
            )}
          </Box>
        </Box>

        {/* RIGHT: Auth */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button>Login</Button>
          <Button variant="contained">Sign Up</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

// =======================
// Styles
// =======================
const dropdownStyle = {
  position: "absolute",
  top: "45px",
  left: 0, // submenu من اليسار
  background: "white",
  boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
  borderRadius: "10px",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  minWidth: "220px",
  zIndex: 2000
};

const submenuItem = {
  justifyContent: "flex-start",
  color: "#333",
  textTransform: "capitalize",
  textAlign: "left"
};
