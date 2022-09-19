import "./App.css";
import Recipes from "./components/Recipes/Recipes";

const App = () => {
  const recipes = [
    {
      id: "e1",
      type: "한식",
      title: "김치찌개",
      date: new Date(2020, 3, 14),
      score: 10,
    },
    {
      id: "e2",
      type: "일식",
      title: "돈가스",
      date: new Date(2020, 8, 14),
      score: 2,
    },
    {
      id: "e3",
      type: "한식",
      title: "미역국",
      date: new Date(2020, 7, 14),
      score: 8,
    },
    {
      id: "e4",
      type: "중식",
      title: "짜장면",
      date: new Date(2020, 10, 14),
      score: 5,
    },
  ];
  return (
    <div>
      <h1>RECIPE BOOK</h1>
      <Recipes recipes={recipes} />
    </div>
  );
};

export default App;
