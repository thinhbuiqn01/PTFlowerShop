import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { srcImg } from "../constant/constant";
import { forWhom, occasion } from "../constant/ListConstant";
import "../sass/_checkout.scss";
import StoreContext from "../store/Context";
import Button from "./Button";

import axios from "axios";
import { newOrder } from "../utils/APIRoutes";

const Checkout = (props) => {
  const [total, setTotal] = useState(0);
  const [state, dispatch] = useContext(StoreContext);

  const [order, setOrder] = useState({});

  const handleOnChange = (e) => {
    setOrder({
      ...order,
      listItem: state.listCart,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { takeName, sentName } = order;
    console.log(takeName, sentName);
    const { data } = axios.post(newOrder, { takeName, sentName });
  };

  return (
    <div className="checkout">
      <div className="wrapper">
        <div className="info">
          <form method="post">
            <div className="order-info">
              <h2>Thông tin người mua</h2>
              {/* Info-send */}
              <div className="row-info">
                <label>
                  <span className="req">*</span>
                  Họ và tên:
                </label>
                <input
                  type="text"
                  name="sentName"
                  onChange={(e) => handleOnChange(e)}
                  className="is-invalid"
                />
                <div className="invalid">Vui lòng nhập họ tên</div>
              </div>
              <div className="row-info">
                <label>
                  <span className="req">*</span>
                  Điện thoại:
                </label>
                <input
                  type="text"
                  name="sentPhone"
                  onChange={(e) => handleOnChange(e)}
                  className="is-invalid"
                />
                <div className="invalid">Vui lòng nhập số điện thoại</div>
              </div>
              <div className="row-info">
                <label>
                  <span className="req">*</span>
                  Nhập email:
                </label>
                <input
                  type="text"
                  name="sendEmail"
                  onChange={(e) => handleOnChange(e)}
                />
              </div>
              <div className="row-info">
                <label>
                  <span className="req">*</span>
                  Địa chỉ:
                </label>
                <input
                  type="text"
                  name="sendAddress"
                  onChange={(e) => handleOnChange(e)}
                />
              </div>
              {/* End info send */}
            </div>
            <div className="order-info">
              <h2>Thông tin người nhận</h2>
              {/* Info-take */}
              <div className="row-info">
                <label>
                  <span className="req">*</span>
                  Họ và tên:
                </label>
                <input
                  type="text"
                  name="takeName"
                  onChange={(e) => handleOnChange(e)}
                  className="is-invalid"
                />
                <div className="invalid">Vui lòng nhập họ tên</div>
              </div>
              <div className="row-info">
                <label>
                  <span className="req">*</span>
                  Điện thoại:
                </label>
                <input
                  type="text"
                  name="takePhone"
                  onChange={(e) => handleOnChange(e)}
                  className="is-invalid"
                />
                <div className="invalid">Vui lòng nhập số điện thoại</div>
              </div>

              <div className="row-info">
                <label>
                  <span className="req">*</span>
                  Địa chỉ:
                </label>
                <input
                  type="text"
                  name="takeAddress"
                  onChange={(e) => handleOnChange(e)}
                  className="is-invalid"
                />
                <div className="invalid">Vui lòng nhập địa chỉ</div>
              </div>

              <div className="row-info">
                {/* ---------------------------------------------------- */}
                <label>
                  <span className="req">*</span>
                  Tỉnh/Thành phố:
                </label>
                <input
                  type="text"
                  name="takeState"
                  onChange={(e) => handleOnChange(e)}
                  className="is-invalid"
                />
                <div className="invalid">Vui lòng nhập địa chỉ</div>
              </div>
              {/* End info take */}
            </div>
            <div className="order-info">
              <h2>Thời gian giao hàng</h2>
              <div>
                <div className="time-delivery">
                  <input
                    type="datetime-local"
                    name="takeTime"
                    onChange={(e) => handleOnChange(e)}
                  />
                </div>
              </div>
              <h2>Lời nhắn</h2>
              <div>
                <label>Thông điệp tặng cho</label>
                <select
                  defaultValue="0"
                  name="giveMessage"
                  onChange={(e) => handleOnChange(e)}
                  id=""
                >
                  {forWhom.map((people) => (
                    <option value={people.value} key={people.value}>
                      {people.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label>Nhân dịp</label>
                <select
                  onChange={(e) => handleOnChange(e)}
                  name="occasion"
                  id=""
                >
                  <option value="0" selected="selected">
                    Nhân dịp
                  </option>
                  {occasion.map((people) => (
                    <option value={people.value} key={people.value}>
                      {people.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>Thông điệp:</div>
              <div>
                <textarea
                  name="takeMessage"
                  onChange={(e) => handleOnChange(e)}
                  rows="2"
                ></textarea>
              </div>

              <div>
                {/* submit form */}
                <Button
                  children="block primary"
                  onClick={(e) => handleSubmit(e)}
                  title="Đặt hàng"
                /> 
                {/* end submit form */}
              </div>
            </div>
          </form>
        </div>
        <div className="total">
          {/* item */}
          {state.listCart?.map((item, index) => (
            <div className="cart-item" key={index}>
              <div className="img">
                <img src={`${srcImg}/${item.image.name}`} alt="" />
              </div>
              <div className="text">
                <Link to="/">{item.nameproduct}</Link>
                <p>
                  <span>{item.price}</span>
                </p>
              </div>
            </div>
          ))}

          {/* end item */}
          <div id="total">
            {/*  */}
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
              <strong id="total-l">price</strong>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
