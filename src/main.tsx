import React from "react";
import ReactDOM from "react-dom/client";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles.css";

const convexUrl = import.meta.env.VITE_CONVEX_URL as string | undefined;
const root = ReactDOM.createRoot(document.getElementById("root")!);

const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

root.render(
  convexUrl ? (
    <ConvexProvider client={new ConvexReactClient(convexUrl)}>{app}</ConvexProvider>
  ) : (
    app
  ),
);
