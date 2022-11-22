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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
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
root.render(<RouterProvider router={router} />);
