import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "typeface-poppins";
import { ThemeProvider } from "@mui/material";
import { customTheme } from "./MUI/customTheme.js";
import GlobalProvider from "./context/services/GlobalProvider.jsx";
import ApiProvider from "./context/ApiProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiProvider>
      <ThemeProvider theme={customTheme}>
        <App />
      </ThemeProvider>
    </ApiProvider>
  </React.StrictMode>
);
