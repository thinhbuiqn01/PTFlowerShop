import { Link } from "react-router-dom";

import logo from "../assets/images/logo.jpg";

import user from "../assets/images/user.png";
import cart from "../assets/images/shopping-bag.png";
import "../sass/_header.scss";

function Header() {
  return (
    <div className="header">
       <div className="top-line"></div>
      <div className="wrapper">
        <div className="logo">
          <Link to="/" title="PThinhShopFlower">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="search">
          <input type="text" id="txtSearch" placeholder="Tìm sản phẩm" />
          <a href="/" className="btn-search">
            Tìm kiếm
          </a>
          <a href="/" className="support">
            <strong>Hotline Miền Bắc</strong>
            <span>000009099</span>
          </a>
          <a href="/" className="support">
            <strong>Hotline Miền Nam</strong>
            <span>000009099</span>
          </a>
          <a href="/" className="support">
            <strong>Hotline Miền trung</strong>
            <span>000009099</span>
          </a>
        </div>
        <div className="cart">
          <Link id="shopping-cart" to="/cart">
            <img src={cart} alt="" />
            <strong>Giỏ hàng</strong>
          </Link>
        </div>
        <div className="my-account">
          <Link id="my-account" to="/account">
            <img src={user} alt="" />
            <strong>Tài khoản</strong>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
