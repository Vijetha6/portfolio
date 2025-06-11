const recipes = [
    {
      name: "Pancakes",
      ingredients: ["eggs", "flour", "milk", "sugar"],
      instructions: "Mix all ingredients and cook on a hot griddle.",
    },
    {
      name: "Omelette",
      ingredients: ["eggs", "milk", "cheese"],
      instructions: "Beat the eggs, add milk, pour into pan and add cheese.",
    },
    {
      name: "Cake",
      ingredients: ["flour", "sugar", "butter", "eggs", "milk"],
      instructions: "Mix all ingredients, bake at 350°F for 25 minutes.",
    },
    {
      name: "French Toast",
      ingredients: ["eggs", "bread", "milk", "sugar"],
      instructions: "Dip bread in beaten egg-milk mixture and fry in a pan.",
    },
  ];
  
  function findRecipes() {
    const input = document.getElementById("ingredients").value;
    const userIngredients = input.split(",").map((ingredient) => ingredient.trim().toLowerCase());
  
    const matchingRecipes = recipes.filter((recipe) => {
      return recipe.ingredients.some((ingredient) =>
        userIngredients.some((userIng) => ingredient.includes(userIng) || userIng.includes(ingredient))
      );
    });
  
    displayRecipes(matchingRecipes);
  }
  
  function displayRecipes(matchingRecipes) {
    const recipesContainer = document.getElementById("recipes");
    recipesContainer.innerHTML = ""; 
  
    if (matchingRecipes.length === 0) {
      recipesContainer.innerHTML = "<p>No recipes found with the given ingredients.</p>";
      return;
    }
  
    matchingRecipes.forEach((recipe) => {
      const recipeDiv = document.createElement("div");
      recipeDiv.classList.add("recipe");
  
      recipeDiv.innerHTML = `
        <h3>${recipe.name}</h3>
        <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
        <p><strong>Instructions:</strong> ${recipe.instructions}</p>
      `;
  
      recipesContainer.appendChild(recipeDiv);
    });
  }
  