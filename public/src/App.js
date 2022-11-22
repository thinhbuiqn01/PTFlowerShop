import React, { useEffect } from "react";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import TopMenu from "./components/TopMenu";

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
        <div className="app-content">
          <Outlet />
        </div>
        <div className="app-footer"></div>
      </div>
    </>
  );
}

export default App;
