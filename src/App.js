
import React from 'react';
import './assets/css/style.css';
import "./index.css"
import dashboardRoutes from './routes';
import { useRoutes } from 'react-router-dom';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const App = () => {
  const route = useRoutes(dashboardRoutes);
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins",
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {route}
      </ThemeProvider>
    </div>
  );
};

export default App;
