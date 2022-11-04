import React, { useState } from "react"; 
import axios from "axios";
import { addProduct } from "../utils/APIRoutes";

document.title = "Admin - New product"
const NewProduct = () => {
  const [values, setValues] = useState({
    nameproduct: "",
    origin: "",
    price: "",
    image: "",
  });

  const handleOnChange = (e) => {
      console.log(e.target.value);
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
      console.log(e);
    e.preventDefault();
    const { nameproduct, origin, price, image } = values;
    const { data } = await axios.post(addProduct, {
      nameproduct,
      origin,
      price,
      image,
    });
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
        <input
          type="file"
          placeholder="image"
          name="image"
          onChange={(e) => handleOnChange(e)}
        />
        <button type="submit">Create product</button>
      </form>
    </div>
  );
};

export default NewProduct;
