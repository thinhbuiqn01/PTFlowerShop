import axios from "axios";
import React, { useEffect, useState } from "react";
import "../sass/_icon-flower.scss";
import { listCategory } from "../utils/APIRoutes";
import image1 from "../assets/images/icon-category/icon-cay-vp.png";

let date = new Date();
date = date.getFullYear();

let title = `Mẫu hoa mới năm ${date}`;
const IconFlower = () => {
  const [topCatalog, setTopCatalog] = useState([]);

  useEffect(() => {
    axios.get(listCategory).then((res) => {
      setTopCatalog(res.data.category);
    });
  }, []);

  return (
    <div className="icon-flower">
      <div className="wrapper">
        <h2>{title}</h2>
        <ul>
          {topCatalog.slice(1, 7).map((catalog, index) => (
            <li key={index}>
              <a href={`/${catalog._id}`}>
                <img src={image1} alt={catalog.namecategory} />
              </a>
              <a href={`/${catalog._id}`}>{catalog.namecategory}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IconFlower;
