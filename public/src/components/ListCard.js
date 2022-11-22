import React from "react";
import "../sass/_list-card.scss";
import { Link } from "react-router-dom";
import { srcImg } from "../constant/constant";
import { numberWithCommas } from "../constant/Comas";

const ListCard = (props) => {
 
  const data = props.data;
  console.log(data);

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
              <Link to={`/san-pham/${item._id}`}>
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

                    <em>
                      {numberWithCommas(
                        item.price * ((100 - props.coupon) / 100)
                      )}
                    </em>
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListCard;
