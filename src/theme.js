// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#0D47A1" },      // أزرق غامق
    secondary: { main: "#FF6F00" },    // برتقالي
    background: { default: "#F4F6F8" } // خلفية فاتحة
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: "Cairo, Roboto, sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 }
  }
});

export default theme;