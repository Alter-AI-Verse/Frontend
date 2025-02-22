import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "./styles/global.css";
import Usercontext from "./components/contexts/user-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Usercontext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Usercontext>
);
