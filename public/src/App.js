import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register"; 
import Login from "./pages/Login";
import NewProduct from "./admin/NewProduct";
import Product from "./admin/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin/product/new" element={<NewProduct />} />
        <Route path="/admin/product" element={<Product />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
