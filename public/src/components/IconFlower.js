import axios from "axios";
import React, { useEffect, useState } from "react";
import "../sass/_icon-flower.scss";
import { listCategory } from "../utils/APIRoutes";
import image1 from "../assets/images/icon-category/icon-cay-vp.png";
import { Link } from "react-router-dom";

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
              <Link to={`/san-pham`}>
                <img src={image1} alt={catalog.namecategory} />
              </Link>
              <Link to={`/san-pham`}>{catalog.namecategory}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IconFlower;
