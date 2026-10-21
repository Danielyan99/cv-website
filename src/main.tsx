import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/tokens.css";
import "./styles/global.css";
import App from "./App.tsx";
import { loadAnalytics } from "./lib/analytics";

if (import.meta.env.PROD) {
  loadAnalytics(import.meta.env.VITE_UMAMI_WEBSITE_ID);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
