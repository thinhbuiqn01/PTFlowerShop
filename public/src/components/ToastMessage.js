import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastMessage = (props) => {
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
  if (props.success) {
    toast.success(props.message, toastOptionSuccess);
    return (
      <>
        thanh cong
        <ToastContainer />
      </>
    );
  } else {
    return <>khong co gi het</>;
  }
};

export default ToastMessage;
