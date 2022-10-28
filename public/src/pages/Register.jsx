import React from "react";

import { Link } from "react-router-dom";

import logo from "../assets/images/logo.jpg";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("form");
  };

  const handleOnChange = (e) => {};

  return (
    <div className="register">
      <div className="register__logo">
        <img src={logo} alt="" />
      </div>
      <form>
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={(e) => handleOnChange(e)}
        />

        <input
          type="text"
          placeholder="Phone"
          name="phone"
          onChange={(e) => handleOnChange(e)}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => handleOnChange(e)}
        />

        <input
          type="password"
          placeholder="Confirm password"
          name="confirmPassword"
          onChange={(e) => handleOnChange(e)}
        />

        <button type="submit" onSubmit={(even) => handleSubmit(even)}>
          Create account
        </button>
        <span>
          Already have account? <Link to="/login">Login</Link>{" "}
        </span>
      </form>
    </div>
  );
};

export default Register;
