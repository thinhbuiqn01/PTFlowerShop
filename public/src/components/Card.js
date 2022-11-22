import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../sass/_card.scss";
import { numberWithCommas } from "../constant/Comas";
import {
  detailCard,
  messageCard,
  noteMessageCard,
  noteVat,
  srcImg,
} from "../constant/constant";
import { getProduct } from "../utils/APIRoutes";
import Button from "./Button";

const Card = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    axios.get(`${getProduct}/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [id]);
  return (
    <div className="card">
      <div className="wrapper">
        <div className="content">
          <div className="l_item">
            <img src={`${srcImg}/${product?.image.name}`} alt="" />
          </div>
          <div className="r_item">
            <h2>{product?.nameproduct}</h2>
            <div className="single-price">
              <span className="old-price"></span>
              <span className="price">{product?.price}</span>
            </div>
            <p className="vat">{`${noteVat}`}</p>
            <div className="pd_summary">{detailCard}</div>
            <p>
              <i>{messageCard}</i>
            </p>
            <div className="note">
              <h4>Lưu ý</h4>
              <p>{noteMessageCard.note1}</p>
              <p>{noteMessageCard.note2}</p>
            </div>
            {/* Button */}
            <div className="area-oder">
              <Button children="outline orange" title="Thêm vào giỏ hàng" />
              <Button children="block primary" title="Thêm vào giỏ hàng" />
            </div>
            {/* End button */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
