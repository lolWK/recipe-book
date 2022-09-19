import React from "react";
import RecipeDate from "./RecipeDate";
import "./RecipeItem.css";

const RecipeItem = props => {
  return (
    <div className="recipe-item">
      <div className="recipe-item__title">
        <div>[{props.type}]</div>
        <h2>{props.title}</h2>
      </div>
      {/* <div>{recipeDate.toISOString()}</div> */}
      <RecipeDate date={props.date} />
      <div>{props.score}점</div>
    </div>
  );
};

export default RecipeItem;
