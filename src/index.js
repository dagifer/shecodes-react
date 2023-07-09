import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Weather from "./Weather";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Weather />
    <footer>
      This project was coded by Dayana Daviott
      <a
        href="https://github.com/dagifer/shecodes-react"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        open-source at GitHub
      </a>
    </footer>
  </React.StrictMode>
);

reportWebVitals();
