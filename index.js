let recipes = [
    {
        id: 1,
        name: "Spaghetti Bolognese",
        ingredients: ["spaghetti", "ground beef", "tomato sauce", "onion", "garlic"],
        instructions: "Cook spaghetti according to package instructions. In a separate pan, sauté onion and garlic, then add ground beef until browned. Add tomato sauce and simmer for 20 minutes. Serve sauce over spaghetti."
    },
    {
        id: 2,
        name: "Chicken Curry",
        ingredients: ["chicken breast", "curry powder", "coconut milk", "onion", "garlic"],
        instructions: "Sauté onion and garlic in a pan. Add chicken breast and cook until browned. Stir in curry powder, then add coconut milk. Simmer for 20 minutes until chicken is cooked through. Serve with rice."
    },
    {
        id: 3,
        name: "Vegetable Stir Fry",
        ingredients: ["broccoli", "carrots", "bell peppers", "soy sauce", "garlic"],
        instructions: "Heat oil in a pan and sauté garlic. Add broccoli, carrots, and bell peppers, and stir fry until tender. Add soy sauce and cook for another 2 minutes. Serve with rice or noodles."
    },
    {
        id: 4,
        name: "Pancakes",
        ingredients: ["flour", "milk", "eggs", "sugar", "baking powder"],
        instructions: "In a bowl, mix flour, sugar, and baking powder. In another bowl, whisk milk and eggs together. Combine wet and dry ingredients until smooth. Heat a pan and pour batter to form pancakes. Cook until bubbles form, then flip and cook until golden brown."
    },
    {
        id: 5,
        name: "Caesar Salad",
        ingredients: ["romaine lettuce", "croutons", "parmesan cheese", "Caesar dressing"],
        instructions: "Toss romaine lettuce with Caesar dressing. Top with croutons and grated parmesan cheese. Serve immediately."
    }
]

let recipesBlock = document.getElementById("recipesBlock");

let recipesList = document.createElement('ul');

for (let i = 0; i < recipes.length; i++) {
    let recipe = document.createElement('li');

    recipe.textContent = recipes[i].name;

    recipesList.appendChild(recipe);
}

recipesBlock.appendChild(recipesList);