import React, { useEffect, useState } from "react";

function GetRecipe() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [recipeData, setRecipeData] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=5d21fcc224ed4f1caff20062b5740f70&ingredients=lemon`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setRecipeData(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {recipeData.map((recipeData) => (
          <li key={recipeData.id}>{recipeData.title}</li>
        ))}
      </ul>
    );
  }
}

export default GetRecipe
