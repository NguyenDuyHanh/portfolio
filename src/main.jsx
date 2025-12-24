import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import "./index.css";
import "flag-icons/css/flag-icons.min.css";
import App from "./App.jsx";
import "./i18n";
import MuiThemeProvider from "./providers/MuiThemeProvider.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <HelmetProvider>
    <MuiThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MuiThemeProvider>
  </HelmetProvider>
  // </StrictMode>
);
