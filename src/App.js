import React, {useState} from "react";
import "./App.css";
import NewRecipe from "./components/NewRecipe/NewRecipe";
import Recipes from "./components/Recipes/Recipes";

const DUMMY_RECIPES = [
  {
    id: "e1",
    type: "한식",
    title: "김치찌개",
    date: new Date(2020, 3, 14),
    rating: "1",
  },
  {
    id: "e2",
    type: "일식",
    title: "돈가스",
    date: new Date(2020, 8, 14),
    rating: "2",
  },
  {
    id: "e3",
    type: "한식",
    title: "미역국",
    date: new Date(2020, 7, 14),
    rating: "5",
  },
  {
    id: "e4",
    type: "중식",
    title: "짜장면",
    date: new Date(2020, 10, 14),
    rating: "3",
  },
];

const App = () => {
  const [recipes, setRecipes] = useState(DUMMY_RECIPES);

  const addRecipeHandler = recipe => {
    // console.log("app/.js");
    console.log(recipes);
    setRecipes(prevRecipes => {
      return [recipe, ...prevRecipes];
    });
  };

  return (
    <div>
      <h1>RECIPE BOOK</h1>
      <NewRecipe onAddRecipe={addRecipeHandler} />
      <Recipes recipes={recipes} />
    </div>
  );
};

export default App;
