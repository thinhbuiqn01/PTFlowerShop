import axios from "axios";
import React, { useState } from "react";
import ToastMessage from "../components/ToastMessage";
import { addCategory } from "../utils/APIRoutes";

const NewCategory = () => {
  const [values, setValues] = useState({
    namecategory: "",
  });
  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const { namecategory } = values;
    const { data } = await axios.post(addCategory, { namecategory });
    if (data.status === true) {
      setValues({namecategory: ""}); 
    } 
  };
  return (
    <div className="product" style={{ margin: "0 auto" }}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Name category"
          name="namecategory"
          value={values.namecategory}
          onChange={(e) => handleOnChange(e)}
        />
        <button type="submit">Create Category</button>
      </form>
    </div>
  );
};

export default NewCategory;
