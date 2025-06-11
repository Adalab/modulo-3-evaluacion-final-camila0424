import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";
import { HashRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode basename="./modulo-3-evaluacion-final-camila0424">
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
