import React, { useEffect } from "react";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import Header from "./components/Header";
import { Outlet, Route, Routes } from "react-router-dom";
import TopMenu from "./components/TopMenu";
import Banner from "./components/Banner";
import Home from "./components/Home";
import Product from "./components/Product";
import Admin from "./components/Admin";
import Dashboard from "./admin/Dashboard";
import Category from "./admin/Category";

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
        if (!user) {
          return;
        }
        const token = await user.getIdToken();
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);
  return (
    <>
      <div className="App">
        <div className="app-header">
          <Header />
          <TopMenu />
        </div>
        <div className="app-content"></div>
        <div className="app-footer"></div>
      </div>
      <>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
            <Route path="product" element={<Product />} />
          </Route>
          <Route path="/admin" element={<Admin />}>
            <Route index path="/admin/dashboard" element={<Dashboard />} />
            <Route index path="/admin/product" element={<Product />} />
            <Route index path="/admin/category" element={<Category />} />
          </Route>
        </Routes>
      </>
    </>
  );
}

export default App;
