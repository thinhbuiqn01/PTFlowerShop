import React, { useContext } from "react";
import Button from "./Button";
import "../sass/_cart.scss";
import StoreContext from "../store/Context";

const Cart = () => {
  
  return (
    <div className="cart-checkout">
      <div className="wrapper">
        <div className="cart-items">
          {/* item */}
          <div className="cart-item">
            <div className="img">
              <img src="s" alt="" />
            </div>
            <div className="text">
              <a href="/">Name product</a>
              <p>
                <span>price</span>
              </p>
              <div className="ctrl-quantity">
                <a href="/" className="minus">
                  -
                </a>
                <input value={1} />
                <a href="/" className="plus">
                  +
                </a>
              </div>
            </div>
            <a href="/" className="close remove-item">
              X
            </a>
          </div>
          {/* end item */}
          {/* item */}
          <div className="cart-item">
            <div className="img">
              <img src="s" alt="" />
            </div>
            <div className="text">
              <a href="/">Name product</a>
              <p>
                <span>price</span>
              </p>
              <div className="ctrl-quantity">
                <a href="/" className="minus">
                  -
                </a>
                <input value={1} />
                <a href="/" className="plus">
                  +
                </a>
              </div>
            </div>
            <a href="/" className="close remove-item">
              X
            </a>
          </div>
          {/* end item */}
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
