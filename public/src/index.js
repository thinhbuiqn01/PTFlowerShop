import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import App from "./App";
import Home from "./components/Home";

import Dashboard from "./admin/Dashboard";
import Product from "./components/Product";
import Admin from "./components/Admin";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="product" element={<Product />} />
      </Route>
      <Route path="/admin" element={<Admin />}> 
        <Route index path="/admin/dashboard" element={<Dashboard />} />
        <Route index path="/admin/product" element={<Product />} />
        <Route index path="/admin/dashboard" element={<Dashboard />} />
      </Route>
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
