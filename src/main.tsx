import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "store/api/apiSlice";

import ContextProviders from "context/ContextProviders";
import App from "./App";
import "./sass/globals/globalStyles.scss";
import "./sass/components/components.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <ContextProviders>
        <ApiProvider api={apiSlice}>
          <App />
        </ApiProvider>
      </ContextProviders>
    </HashRouter>
  </React.StrictMode>
);
