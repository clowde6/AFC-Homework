import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#757ce8'
    }
  }
});

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      {/* Your app content here */}
    </ThemeProvider>
  );
};

export default Themes