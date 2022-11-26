import axios from "axios";
import React, { useEffect, useState } from "react";
import { listProduct } from "../utils/APIRoutes";
import Banner from "./Banner";
import IconFlower from "./IconFlower";
import ListCard from "./ListCard";
import "../sass/_home.scss";

const Home = () => {
  const [products, setPropducts] = useState([]);

  const array = products;
  const element = array.sort(() => Math.random() - Math.random());

  useEffect(() => {
    axios.get(listProduct).then((response) => {
      setPropducts(response.data.products);
    });
  }, []);

  return (
    <div>
      <Banner />
      <IconFlower />
      <div className="content">
        <div className="wrapper">
          <ListCard
            title="Khuyến mãi"
            bgc={"#ffe6dd"}
            coupon={30}
            data={element?.slice(0, 10)}
          />
        </div>
      </div>
      <div className="content">
        <div className="wrapper">
          <ListCard
            title="Dành cho tình yêu"
            coupon={30}
            data={products?.slice(2, 12)}
          />
        </div>
      </div>
      <div className="content">
        <div className="wrapper">
          <ListCard
            title="Giao nhanh 60 phút"
            coupon={30}
            data={products?.slice(0, 10)}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
