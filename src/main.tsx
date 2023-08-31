import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import ContextProviders from "context/ContextProviders";
import App from "./App";
import "./sass/globals/globalStyles.scss";
import "./sass/components/components.scss";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <ContextProviders>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ContextProviders>
    </HashRouter>
  </React.StrictMode>
);
