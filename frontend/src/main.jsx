import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ShopContextProvider from "./context/ShopContext.jsx";

const CleanupLocalStorage = () => {
  useEffect(() => {
    console.log("Clearing old local storage data...");
    localStorage.clear();
  }, []);

  return null;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ShopContextProvider>
      <CleanupLocalStorage />
      <App />
    </ShopContextProvider>
  </BrowserRouter>
);
