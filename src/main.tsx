import React from "react";
import ReactDOM from "react-dom/client";
import App from "app.tsx";
import "styles/global.css";
import "styles/reset.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
