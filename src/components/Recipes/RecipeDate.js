import React from "react";

const RecipeDate = props => {
  const date = props.date.toLocaleString("ko-KR", {dateStyle: "short"}); // 월
  const month = parseInt(props.date.toLocaleString("ko-KR", {month: "numeric"})) - 1; // 월
  const day = props.date.toLocaleString("ko-KR", {day: "2-digit"}); // 일
  // const year = props.date.getFullYear(); // 년
  const a = props.date.toLocaleString("ko-KR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    // hour: "2-digit",
    // minute: "2-digit",
    // hour12: true,
  }); // 년
  return (
    <div>
      {/* {props.date.toISOString()} */}
      {/* <span>{year}년 </span> */}
      {/* <span>{month} </span> */}
      {/* <span>{day}</span> */}
      <span>{date}</span>
      {/* {a}  */}
    </div>
  );
};

export default RecipeDate;
