import React from "react";
import { Link } from "react-router-dom";
import "../sass/_button.scss";

const Button = (props) => {
  return (
    <span className="button">
      <Link to={props.to}>
        <div className={`${props.children}`} {...props}>
          {props.title}
        </div>
      </Link>
    </span>
  );
};

export default Button;
