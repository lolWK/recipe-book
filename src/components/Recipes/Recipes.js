import React, {useState} from "react";
import RecipesList from "./RecipesList";
import RecipeFilter from "./RecipeFilter";
// import RecipeItem from "./RecipeItem";

const Recipes = props => {
  /* 필터 부분임 ,,  */
  const [filteredRating, setFilteredRating] = useState("0");

  const filterChangeHandler = selectedRating => {
    console.log("뭐지??", filteredRating);
    // console.log(selectedRating);
    setFilteredRating(selectedRating);
  };

  const filteredRecipes = props.recipes.filter(recipe => {
    return recipe.rating === filteredRating;
  });

  // let recipesContent = <p>아직 없음</p>;
  // if (filteredRating === "0") {
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
  // if (filteredRecipes.length > 0) {
  //   recipesContent = filteredRecipes.map(recipes => (
  //     <RecipeItem
  //       key={recipes.id}
  //       title={recipes.title}
  //       type={recipes.type}
  //       date={recipes.date}
  //       rating={recipes.rating}
  //     />
  //   ));
  // }

  return (
    <div>
      <RecipeFilter selected={filteredRating} onChangeFilter={filterChangeHandler} />
      <RecipesList
        filteredRecipes={filteredRecipes}
        filteredRating={filteredRating}
        recipes={props.recipes}
      />

      {/* {filteredRating === "0" &&
        props.recipes.map(recipes => (
          <RecipeItem
            key={recipes.id}
            title={recipes.title}
            type={recipes.type}
            date={recipes.date}
            rating={recipes.rating}
          />
        ))}

      {filteredRecipes.length === 0 && <p>No Recipe found.</p>}
      {filteredRecipes.length > 0 &&
        filteredRecipes.map(recipes => (
          <RecipeItem
            key={recipes.id}
            title={recipes.title}
            type={recipes.type}
            date={recipes.date}
            rating={recipes.rating}
          />
        ))} */}

      {/* {props.recipes.map(recipes => (
        <RecipeItem
          key={recipes.id}
          title={recipes.title}
          type={recipes.type}
          date={recipes.date}
          rating={recipes.rating}
        />
      ))} */}
    </div>
  );
};

export default Recipes;
