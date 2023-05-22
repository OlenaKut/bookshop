import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";
import posthog from "posthog-js";

posthog.init("<ph_project_api_key>", { api_host: "<ph_instance_address>" });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
