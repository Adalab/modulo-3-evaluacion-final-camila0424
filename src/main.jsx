import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";
import { HashRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode basename="./">
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
