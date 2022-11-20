import axios from "axios";
import React, { useEffect, useState } from "react";
import { listProduct } from "../utils/APIRoutes";
import Banner from "./Banner";
import IconFlower from "./IconFlower";
import ListCard from "./ListCard";

const Home = () => {
  const [products, setPropducts] = useState([]); 

  useEffect(() => {
    axios.get(listProduct).then((response) => {
      setPropducts(response.data.products); 
    });
  }, []); 

  return (
    <div>
      <Banner />
      <IconFlower />
      <ListCard title="Khuyến mãi" bgc={'#ffe6dd'} coupon={30} data={products.slice(0, 10)} />
      <ListCard title="Dành cho tình yêu" coupon={30} data={products.slice(2, 12)} />
      <ListCard title="Giao nhanh 60 phút" coupon={30} data={products.slice(0, 10)} />
    </div>
  );
};

export default Home;
