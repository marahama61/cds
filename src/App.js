import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./theme"; 
import './App.css';
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />   
        <CssBaseline />
        <Home />
    </ThemeProvider>
  );
}

export default App;
