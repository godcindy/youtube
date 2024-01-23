import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createRoot } from "react-dom/client";

const domNode = document.querySelector("#root");
const root = createRoot(domNode);
root.render(<App />);
