import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";

const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="header__logo">
          <img src={logo} alt="" />
        </div>
        <div className="header__navbar">
          <div className="header__navbar__item">
            <Link to="/">Home</Link>
          </div>
          <div className="header__navbar__item">
            <Link to="/about">About</Link>
          </div>
          <div className="header__navbar__item">
            <Link to="/category">Category</Link>
          </div>
          <div className="header__navbar__item">
            <Link to="/cart">Cart</Link>
          </div>
          <div className="header__navbar__item">
            <Link to="/contact">Contact</Link>
          </div>
          <div className="header__navbar__item">
            <Link to="/login">Account</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
