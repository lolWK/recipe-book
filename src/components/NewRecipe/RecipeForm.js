import React, {useState} from "react";
import "./RecipeForm.css";

const RecipeForm = props => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredType, setEnteredType] = useState("한식");
  const [enteredRating, setEnteredRating] = useState("1");
  const [enteredIngredient, setEnteredIngredient] = useState("");
  const [enteredContent, setEnteredContent] = useState("");
  const [enteredComment, setEnteredComment] = useState("");
  // const [nowDate, setNowDate] = useState("");

  const titleChangeHandler = e => {
    setEnteredTitle(e.target.value);
  };
  const typeChangeHandler = e => {
    setEnteredType(e.target.value);
  };
  const ratingChangeHandler = e => {
    setEnteredRating(e.target.value);
  };
  const ingredientChangeHandler = e => {
    setEnteredIngredient(e.target.value);
  };
  const contentChangeHandler = e => {
    setEnteredContent(e.target.value);
  };
  const commentChangeHandler = e => {
    setEnteredComment(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    const recipeData = {
      title: enteredTitle,
      type: enteredType,
      rating: enteredRating,
      ingredient: enteredIngredient,
      content: enteredContent,
      comment: enteredComment,
      date: new Date(),
    };
    props.onSaveRecipeData(recipeData);
    setEnteredTitle("");
    setEnteredType("한식");
    setEnteredRating("1");
    setEnteredIngredient("");
    setEnteredContent("");
    setEnteredComment("");
  };

  return (
    <form action="" onSubmit={submitHandler}>
      <div>
        <div>
          <label htmlFor="">이름</label>
          <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
        </div>
        <div>
          <div>
            <label htmlFor="">종류</label>
            <select onChange={typeChangeHandler} value={enteredType}>
              <option value="한식">한식</option>
              <option value="일식">일식</option>
              <option value="중식">중식</option>
              <option value="제빵">제빵</option>
              <option value="음료">음료</option>
              <option value="기타">기타</option>
            </select>
          </div>
          <div>
            <label htmlFor="">평점</label>
            <select onChange={ratingChangeHandler} value={enteredRating}>
              <option value="1">1점</option>
              <option value="2">2점</option>
              <option value="3">3점</option>
              <option value="4">4점</option>
              <option value="5">5점</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="">재료</label>
          <textarea onChange={ingredientChangeHandler} value={enteredIngredient}></textarea>
        </div>
        <div>
          <label htmlFor="">만드는 법</label>
          <textarea onChange={contentChangeHandler} value={enteredContent}></textarea>
        </div>
        <div>
          <label htmlFor="">한줄평</label>
          <input type="text" onChange={commentChangeHandler} value={enteredComment} />
        </div>
      </div>
      <button type="button" onClick={props.onCancel}>
        취소하기
      </button>

      <button type="submit">등록하기</button>
    </form>
  );
};

export default RecipeForm;
