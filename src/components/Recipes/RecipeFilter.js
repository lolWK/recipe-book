import React from "react";

const RecipeFilter = props => {
  const dropdownChangeHandler = e => {
    props.onChangeFilter(e.target.value);
    // 값 recipes.js로 보냄
  };
  return (
    <div>
      <div>
        <label>Filter by Rating</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="1">1점</option>
          <option value="2">2점</option>
          <option value="3">3점</option>
          <option value="4">4점</option>
          <option value="5">5점</option>
        </select>
      </div>
    </div>
  );
};

export default RecipeFilter;
