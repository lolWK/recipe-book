import React from "react";
import RecipeItem from "./RecipeItem";

const Recipes = props => {
  return (
    <div>
      <RecipeItem
        title={props.recipes[0].title}
        type={props.recipes[0].type}
        date={props.recipes[0].date}
        score={props.recipes[0].score}
      />
      <RecipeItem
        title={props.recipes[1].title}
        type={props.recipes[1].type}
        date={props.recipes[1].date}
        score={props.recipes[1].score}
      />
      <RecipeItem
        title={props.recipes[2].title}
        type={props.recipes[2].type}
        date={props.recipes[2].date}
        score={props.recipes[2].score}
      />
      <RecipeItem
        title={props.recipes[3].title}
        type={props.recipes[3].type}
        date={props.recipes[3].date}
        score={props.recipes[3].score}
      />
    </div>
  );
};

export default Recipes;
