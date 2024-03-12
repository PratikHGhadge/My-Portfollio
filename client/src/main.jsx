import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { DarkThemeToggle, Flowbite } from "flowbite-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Flowbite>
      <BrowserRouter>
        <div className=" right-4 bottom-4 z-50 text-white  bg-white rounded-lg fixed">
          <DarkThemeToggle />
        </div>
        <App />
      </BrowserRouter>
    </Flowbite>
  </React.StrictMode>
);
