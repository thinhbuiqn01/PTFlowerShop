import React, { useState } from "react";
import axios from "axios";
import { addProduct } from "../utils/APIRoutes";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

const NewProduct = () => {
  const [values, setValues] = useState({
    nameproduct: "",
    origin: "",
    price: "",
    categoryID: 0,
    image: "",
  });

  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { nameproduct, origin, price, image, categoryID } = values;
    const { data } = await axios.post(addProduct, {
      nameproduct,
      origin,
      price,
      categoryID,
      image,
    });
    if (data.status === true) {
      return toast.success(<Link to="/admin/products" >You can see the product list here!</Link>, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <div className="product">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Name product"
          name="nameproduct"
          onChange={(e) => handleOnChange(e)}
        />
        <input
          type="text"
          placeholder="Origin"
          name="origin"
          onChange={(e) => handleOnChange(e)}
        />
        <input
          type="text"
          placeholder="Price product"
          name="price"
          onChange={(e) => handleOnChange(e)}
        />
        <select name="categoryID" onChange={(e) => handleOnChange(e)}>
          <option value={1}>Hoa chậu</option>
          <option value={2}>Hoa giỏ</option>
          <option value={3}>Hoa bó</option>
          <option value={4}>Hoa giấy</option>
        </select>
        <input
          type="file"
          placeholder="image"
          name="image"
          onChange={(e) => handleOnChange(e)}
        />
        <button type="submit">Create product</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default NewProduct;
