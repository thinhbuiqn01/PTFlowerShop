import React from "react";
import "../sass/_button.scss";

const Button = (props) => {
  return (
    <span className="button">
      <div className={`${props.children}`}>{props.title}</div>
    </span>
  );
};

export default Button;
