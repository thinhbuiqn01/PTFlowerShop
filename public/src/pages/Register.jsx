import React, { useState } from "react";

import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

import { registerRoute } from "../utils/APIRoutes";

import logo from "../assets/images/logo.jpg";

const Register = () => {
  const [values, setValues] = useState({
    username: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!handleValidation()) {
      const { password, username, phone } = values;
      // lay du lieu tu API va so sanh
      const { data } = await axios.post(registerRoute, {
        username,
        password,
        phone,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptionError);
      }
      if (data.status === true) {
        toast.success(
          <Link to="/login">You can login here!</Link>,
          toastOptionSuccess
        );
        localStorage.setItem("flower-shop", JSON.stringify(data.user));
      }
    }
  };

  const toastOptionSuccess = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  const toastOptionError = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  const handleValidation = () => {
    const { username, phone, password, confirmPassword } = values;

    if (password.length < 6) {
      toast.error("🦄 Please, Enter your password than 6 characters!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (username.length < 8) {
      toast.error(
        "🦄 Please, Enter your username than 8 characters!",
        toastOptionError
      );
    } else if (phone.length !== 10) {
      toast.error(
        "🦄 Please, Enter your phone number 10 characters!",
        toastOptionError
      );
    } else if (password !== confirmPassword) {
      toast.error("Enter your password the same!", toastOptionError);
    }
  };

  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="register">
      <div className="register__logo">
        <img src={logo} alt="" />
      </div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
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

        <button type="submit">Create account</button>
        <span>
          Already have account? <Link to="/login">Login</Link>{" "}
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
