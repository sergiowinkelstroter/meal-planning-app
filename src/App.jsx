import { useState } from "react";
import { MealList } from "./components/MealList";

function App() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState();

  const getMealData = () => {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=9a3fe4ba9213424ab1e7211afd07e760&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
        console.log(data);
      });
  };

  return (
    <div className="App">
      <h1>Planejamento de refeições</h1>
      <section className="controls">
        <input
          type="number"
          placeholder="Calories (e.g. 2000)"
          onChange={(e) => setCalories(e.target.value)}
          value={calories}
        />

        <button onClick={getMealData}>Obter plano alimentar diário</button>
      </section>
      {mealData && <MealList mealData={mealData} />}
    </div>
  );
}

export default App;
