import React from "react";
import RecipeItem from "./RecipeItem";

const RecipesList = props => {
  if (props.filteredRecipes.length === 0 && props.filteredRating !== "0") {
    return <h2>아직 없음</h2>;
  }
  // let recipesContent = <p>아직 없음</p>;
  if (props.filteredRating === "0") {
    return props.recipes.map(recipes => (
      <RecipeItem
        key={recipes.id}
        title={recipes.title}
        type={recipes.type}
        date={recipes.date}
        rating={recipes.rating}
      />
    ));
  }
  // if (props.recipes.length > 0) {
  //   recipesContent = props.recipes.map(recipes => (
  //     <RecipeItem
  //       key={recipes.id}
  //       title={recipes.title}
  //       type={recipes.type}
  //       date={recipes.date}
  //       rating={recipes.rating}
  //     />
  //   ));
  // }
  console.log(props.recipes);
  return (
    <ul>
      {props.filteredRating === "0" &&
        props.recipes.map(recipes => (
          <RecipeItem
            key={recipes.id}
            title={recipes.title}
            type={recipes.type}
            date={recipes.date}
            rating={recipes.rating}
          />
        ))}
      {props.recipes.length > 0 &&
        props.filteredRecipes.map(recipes => (
          <RecipeItem
            key={recipes.id}
            title={recipes.title}
            type={recipes.type}
            date={recipes.date}
            rating={recipes.rating}
          />
        ))}
      {/* {props.filteredRecipes.map(recipes => (
        <RecipeItem
          key={recipes.id}
          title={recipes.title}
          type={recipes.type}
          date={recipes.date}
          rating={recipes.rating}
        />
      ))} */}
    </ul>
  );
};

export default RecipesList;
