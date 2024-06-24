import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./contexts/ProductProvider";
import { SidebarProvider } from "./contexts/SidebarContext";
import { CartProvider } from "./contexts/CartContext";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <SidebarProvider>
      <CartProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </CartProvider>
    </SidebarProvider>
  </BrowserRouter>
);
