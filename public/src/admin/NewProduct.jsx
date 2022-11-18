import React, { useState } from "react";
import axios from "axios";
import { addProduct } from "../utils/APIRoutes";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const NewProduct = (props) => {
  const categories = props.data.category;
  const navigate = useNavigate();

  const [values, setValues] = useState({
    nameproduct: "",
    origin: "",
    price: "",
    categoryID: 0,
  });
  const [selectImage, setSelectImage] = useState({});

  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleOnChangeFile = (e) => {
    let image = e.target.files[0];
    /*  image = image.slice(5, 300)  */
    setSelectImage(image);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { nameproduct, origin, price, categoryID } = values;
    const image = {
      lastModified: selectImage.lastModified,
      name: selectImage.name,
      size: selectImage.size,
      lastModifiedDate: selectImage.lastModifiedDate,
      type: selectImage.type,
      webkitRelativePath: selectImage.webkitRelativePath,
    };
    console.log(image);

    const { data } = await axios.post(addProduct, {
      nameproduct,
      origin,
      price,
      categoryID,
      image,
    }); 
  };
  return (
    <div className="product" style={{ margin: "0 auto" }}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          value={values.nameproduct}
          type="text"
          placeholder="Name product"
          name="nameproduct"
          onChange={(e) => handleOnChange(e)}
        />
        <input
          value={values.origin}
          type="text"
          placeholder="Origin"
          name="origin"
          onChange={(e) => handleOnChange(e)}
        />
        <input
          value={values.price}
          type="text"
          placeholder="Price product"
          name="price"
          onChange={(e) => handleOnChange(e)}
        />
        <select name="categoryID" onChange={(e) => handleOnChange(e)}>
          {categories?.map((category, index) => (
            <option key={index} value={category._id}>
              {category.namecategory}
            </option>
          ))}
        </select>
        <input
          value={values.image}
          type="file"
          placeholder="image"
          onChange={(e) => handleOnChangeFile(e)}
        />
        <button type="submit">Create product</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default NewProduct;
