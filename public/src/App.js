import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login"; 
import Dashboard from "./admin/Dashboard";
import { UpdateProduct } from "./admin/UpdateProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} /> 
        <Route path="/admin" element={<Dashboard />} /> 
        <Route path="/admin/product/:id" element={<UpdateProduct />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
