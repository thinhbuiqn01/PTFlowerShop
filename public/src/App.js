import React, { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./admin/Dashboard";
import { UpdateProduct } from "./admin/UpdateProduct";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from "./pages/Home";

const config = {
  apiKey: "AIzaSyBdms9-FMBeViv6YE05IdY8-TWpdxPmoMU",
  authDomain: "images-24edc.firebaseapp.com",
  // ...
};
firebase.initializeApp(config);

function App() {
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        console.log(user);
        if (!user) {
          console.log("user is not login");
          return;
        }
        console.log(("Logged in user:", user.displayName));
        const token = await user.getIdToken();        ;
        console.log(("Logged in user token:", token));
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);
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
