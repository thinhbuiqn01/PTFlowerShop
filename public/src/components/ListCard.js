import React from "react";
import "../sass/_list-card.scss";

const srcImg =
  "https://raw.githubusercontent.com/thinhbuiqn01/PTFlowerShop/master/public/src/assets/images/list-product";
const ListCard = (props) => {
  const data = props.data;

  return (
    <div className="content">
      <div className="wrapper">
        <div className="data__items" style={{ backgroundColor: props.bgc }}>
          <h2>
            <a href="/" title={props.title}>
              {props.title}
            </a>
          </h2>
          {data?.map((item, index) => (
            <div className="item" key={index}>
              <div className="i">
                <a title={props.title} href="/">
                  <img
                    src={`${srcImg}/${item.image.name}`}
                    alt={data.nameproduct}
                  />
                </a>
              </div>
              <div className="t">
                <a title={props.title} href="/">
                  {item.nameproduct}
                </a>
                <span className="vn">
                  <em className="oprice">{item.price}</em>
                  <em>{item.price * ((100 - props.coupon) / 100)}</em>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListCard;
