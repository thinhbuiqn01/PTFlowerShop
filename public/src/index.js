import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Home from "./components/Home";

import Dashboard from "./admin/Dashboard";
import Product from "./admin/Product";
import Admin from "./components/Admin";
import Category from "./admin/Category";
import Login from "./components/Login";
import Card from "./components/Card";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import StoreProvider from "./store/Provider";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="san-pham/:id" element={<Card />} />
        <Route path="gio-hang" element={<Cart />} />
        <Route path="dat-hang" element={<Checkout />} />
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="/admin" element={<Admin />}>
        <Route index path="/admin/dashboard" element={<Dashboard />} />
        <Route index path="/admin/product" element={<Product />} />
        <Route index path="/admin/category" element={<Category />} />
      </Route>
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StoreProvider>
    <RouterProvider router={router} />
  </StoreProvider>
);
