import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  detailCard,
  messageCard,
  noteMessageCard,
  noteVat,
  srcImg,
} from "../constant/constant";
import "../sass/_card.scss";
import StoreContext from "../store/Context";
import { getProduct } from "../utils/APIRoutes";
import Button from "./Button";
import { setAddCartInput, addToCart } from "../store/actions";

const Card = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    axios.get(`${getProduct}/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [id]);

  const [state, dispatch] = useContext(StoreContext);

  const handleSetAddCart = (e) => {
    dispatch(addToCart(product));
  };

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
            <div className="area-oder" style={{ padding: "10px" }}>
              <Button
                children="outline orange"
                onClick={handleSetAddCart}
                title="Thêm vào giỏ hàng"
              />
              <button onClick={handleSetAddCart}>as</button>
              <Button
                children="block primary"
                onClick={handleSetAddCart}
                title="Mua ngay"
              />
              <Link to='/dat-hang'  onClick={handleSetAddCart}>Mua ngay</Link>
            </div>
            {/* End button */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
