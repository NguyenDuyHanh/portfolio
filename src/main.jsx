import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import "flag-icons/css/flag-icons.min.css";
import App from "./App.jsx";
import "./i18n";
import MuiThemeProvider from "./components/MuiThemeProvider.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <MuiThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MuiThemeProvider>
  // </StrictMode>
);
