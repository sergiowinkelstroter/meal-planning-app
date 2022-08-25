import { Meal } from "./Meal";

export const MealList = ({ mealData }) => {
  return (
    <main>
      <section className="nutrients">
        <h1>Macros</h1>
        <ul>
          <li>Calorias: {mealData.nutrients.calories.toFixed(0)}</li>
          <li>Carboidratos: {mealData.nutrients.carbohydrates.toFixed(0)}</li>
          <li>Gordura {mealData.nutrients.fat.toFixed(0)}</li>
          <li>Proteína: {mealData.nutrients.protein.toFixed(0)}</li>
        </ul>
      </section>

      <section className="meals">
        {mealData.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </section>
    </main>
  );
};
