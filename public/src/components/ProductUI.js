import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  listCategory,
  listProduct,
  listProductOfCate,
} from "../utils/APIRoutes";
import ListCard from "./ListCard";

import "../sass/_product-ui.scss";
import "../sass/_home.scss";

const ProductUI = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(listCategory).then((res) => {
      setCategories(res.data.category);
    });
  }, []);

  useEffect(() => {
    axios.get(listProduct).then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  const handleGetProductOfCate = async (e, id) => {
    const { data } = await axios.get(`${listProductOfCate}/${id}`);
    setProducts(data.data);
  };

  return (
    <div className="content">
      <div className="wrapper">
        <div className="sc-left" style={{ float: "left", width: "20%" }}>
          <div className="menu-category">
            <h2>Cách trình bày</h2>
            {categories?.map((cate, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  onChange={(e) => handleGetProductOfCate(e, cate._id)}
                />
                <label>{cate.namecategory}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="sc-right" style={{ width: "80%" }}>
          {products.length === 0 ? (
            `Danh muc hien chua co san pham`
          ) : (
            <ListCard
              title="Danh sách sản phẩm" 
              coupon={30}
              data={products}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductUI;
