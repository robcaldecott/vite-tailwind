import React from "react";
import ReactDOM from "react-dom/client";
import { IntlProvider } from "react-intl";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { App } from "@/components/App";
import { ThemeProvider } from "@/providers/ThemeProvider";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./main.css";

import("./mocks/browser").then(({ worker }) => {
  // Start mock service worker
  worker.start({ onUnhandledRequest: "bypass" });

  // Create the react-query client
  const queryClient = new QueryClient();

  // Render the app
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <IntlProvider locale="en-GB" defaultLocale="en-GB">
          <Router>
            <ThemeProvider>
              <App />
            </ThemeProvider>
          </Router>
        </IntlProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
});
