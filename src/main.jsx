import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// product provider
import ProductProvider from "./context/ProductContext";
// import sidebar provider
import SidebarProvider from "./context/SidebarContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SidebarProvider>
    <ProductProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ProductProvider>
  </SidebarProvider>
);
