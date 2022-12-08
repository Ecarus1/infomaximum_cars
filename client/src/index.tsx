import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import {BrowserRouter} from "react-router-dom"

const rootNodeId = "root";

const container = document.getElementById(rootNodeId);

if (!container) {
  throw new Error(`Не найден Dom элемент с ${rootNodeId} `);
}

const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
