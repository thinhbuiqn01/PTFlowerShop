import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

import { loginRoute } from "../utils/APIRoutes";

import logo from "../assets/images/logo.jpg"; 
const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  /*   useEffect(() => {
    if(localStorage.getItem('flower-shop')){
      navigate('/');
    }
  },[]); */

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!handleValidation()) {
      const { password, username } = values;
      // lay du lieu tu API va so sanh
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOption.error);
      }
      if (data.status === true) {
        toast.success(
          <Link to="/login">You can login here!</Link>,
          toastOption.success
        );
        localStorage.setItem("flower-shop", JSON.stringify(data.user));
        navigate("/");
      }
    }
  };
  const toastOption = {
    success: {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    },
    error: {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    }
  };

  const handleValidation = () => {
    const { username, password } = values;

    if (password.length === "") {
      toast.error("🦄 Username and password is require", toastOption.error);
    } else if (username.length === "") {
      toast.error("🦄 Username and password is require", toastOption.error);
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
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => handleOnChange(e)}
        />

        <button type="submit">Login In</button>
        <span>
          Don't have account? <Link to="/register">Register</Link>{" "}
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
