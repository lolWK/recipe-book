import React from "react";
import "./Card.css";

const Card = props => {
  // props.children은 설정한 클래스 네임의 스타일만 적용되고 안의 내용의 스타일은 적용이 안됨 그래서 아래처럼 설정 해줘야함
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
