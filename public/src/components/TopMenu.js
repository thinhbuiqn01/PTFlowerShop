import React from "react";
import { Link, NavLink } from "react-router-dom";

const menuNav = [
  {
    path: "/",
    title: "Trang chủ",
  },
  {
    path: "/chu-de",
    title: "chủ đề",
  },
  {
    path: "/doi-tuong",
    title: "đối tượng",
  },
  {
    path: "/kieu-dang",
    title: "kiểu dáng",
  },
  {
    path: "/hoa-tuoi",
    title: "hoa tươi",
  },
  {
    path: "/mau-sac",
    title: "Màu sắc",
  },
  {
    path: "/bo-suu-tap",
    title: "Bộ sưu tập",
  },
  {
    path: "/qua-tang-kem",
    title: "Quà tặng kèm",
  },
  {
    path: "/hoa-cuoi",
    title: "Hoa cưới",
  },
  {
    path: "/y-nghia-hoa",
    title: "Ý nghĩa hoa",
  },
];

const TopMenu = () => {
  return (
    <div
      className="top-menu"
      style={{
        width: "100%",
        position: "relative",
        display: "block", 
        float: "left",
        boxShadow:"2px #4f4f4f",
        height: "48px",
        clear: "both",
        marginTop: "10px",
        background: "#f7f7f7",
      }}
    >
      <div
        className="top-menu__wrapper"
        style={{
          margin: "0 auto",
          width: "1140px",
          position: "relative",
          display: "block",
          clear: "both",
        }}
      >
        <ul
          className="top-menu__nav"
          style={{
            float: "left",
            position: "relative",
            display: "block",
            width: "100%",
            clear: "both",
            marginBottom: "24px",
            listStyle: "none",
          }}
        >
          {menuNav.map((item, index) => (
            <li
              key={index}
              className="has-child"
              style={{
                float: "left",
                display: "block",
                position: "relative",
              }}
            >
              <h2
                style={{
                  fontSize: "13px",
                }}
              >
                <NavLink
                  to={item.path}
                  style={{
                    display: "block",
                    textAlign: "center",
                    lineHeight: "40px",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    color: "#555",
                    padding: "0 26px 0 0",
                  }}
                >
                  {item.title}
                </NavLink>
              </h2>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopMenu;
