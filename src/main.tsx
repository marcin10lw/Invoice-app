import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "store/api/apiSlice";

import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import "./sass/globals/globalStyles.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider>
        <ApiProvider api={apiSlice}>
          <App />
        </ApiProvider>
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>
);
