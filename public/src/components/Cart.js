import React, { useContext } from "react";
import Button from "./Button";
import "../sass/_cart.scss";
import StoreContext from "../store/Context";
import { srcImg } from "../constant/constant";
import { Link } from "react-router-dom";
import { numberWithCommas } from "../constant/Comas";

const Cart = () => {
  const [state, dispatch] = useContext(StoreContext);
  console.log(state);
  return (
    <div className="cart-checkout">
      <div className="wrapper">
        <div className="cart-items">
          {state.listCart?.map((item, index) => (
            <div className="cart-item">
              <div className="img">
                <img src={`${srcImg}/${item.image.name}`} alt="" />
              </div>
              <div className="text">
                <Link to={`/san-pham/${item._id}`}>{item.nameproduct}</Link>
                <p>
                  <span>{numberWithCommas(item.price)}</span>
                </p>
                <div className="ctrl-quantity">
                  <span className="minus">-</span>
                  <input value={1} />
                  <span className="plus">+</span>
                </div>
              </div>
              <span className="close remove-item">X</span>
            </div>
          ))}
        </div>
        <div className="total">
          <div className="each-row">
            <span>Tạm tính:</span>
            <strong id="subtotal">price</strong>
          </div>
          <div className="each-row">
            <span>Phụ phí:</span>
            <strong id="sub-fee">-</strong>
          </div>
          <div className="each-row">
            <span>Giảm giá:</span>
            <strong id="discount">-</strong>
          </div>
          <div className="each-row">
            <span>Hóa đơn VAT:</span>
            <strong id="vat">price</strong>
          </div>
          <div className="each-row last">
            <span>Tổng cộng:</span>
            <strong id="total">price</strong>
          </div>
          <div className="btn-order">
            <Button children="block primary" title="Đặt hàng" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
