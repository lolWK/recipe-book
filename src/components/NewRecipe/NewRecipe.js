import React, {useState} from "react";
import RecipeForm from "./RecipeForm";
import "./NewRecipe.css";

const NewRecipe = props => {
  const [isEditing, setIsEditing] = useState(false);

  const saveRecipeDataHandler = enteredRecipeData => {
    const recipeData = {
      ...enteredRecipeData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddRecipe(recipeData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-recipe">
      {!isEditing && <button onClick={startEditingHandler}>새 레시피 쓰러가기</button>}
      {isEditing && (
        <RecipeForm onSaveRecipeData={saveRecipeDataHandler} onCancel={stopEditingHandler} />
      )}
    </div>
  );
};

export default NewRecipe;
