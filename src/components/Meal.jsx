import { useEffect, useState } from "react";

export const Meal = ({ meal }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=9a3fe4ba9213424ab1e7211afd07e760&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
        console.log(data.image);
      })
      .catch(() => {
        console.log("error");
      });
  }, [meal.id]);

  return (
    <article>
      <h1>{meal.title}</h1>
      <img src={imageUrl} alt="recipe" />
      <ul className="instructions">
        <li>Tempo de preparação: {meal.readyInMinutes} minutos</li>
        <li>Número de porções: {meal.servings}</li>
      </ul>

      <a target="_blank" href={meal.sourceUrl}>
        Ir para a receita
      </a>
    </article>
  );
};
