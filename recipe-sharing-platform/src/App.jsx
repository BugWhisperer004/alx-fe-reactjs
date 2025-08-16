import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";
import { useState } from "react";

function App() {
  const [recipes, setRecipes] = useState([
    { id: 1, title: "Pasta Bolognese", description: "Italian pasta with meat sauce", ingredients: ["pasta", "beef", "tomato"], instructions: "Cook pasta, prepare sauce, mix." },
    { id: 2, title: "Chicken Sandwich", description: "Quick and tasty sandwich", ingredients: ["bread", "chicken", "mayo"], instructions: "Assemble bread, chicken, and mayo." },
    { id: 3, title: "Goulash", description: "Hungarian stew with paprika", ingredients: ["beef", "paprika", "onions"], instructions: "Cook beef with paprika and onions." },
  ]);

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage recipes={recipes} />} />
        <Route path="/recipe/:id" element={<RecipeDetail recipes={recipes} />} />
        <Route path="/add-recipe" element={<AddRecipeForm onAddRecipe={handleAddRecipe} />} />
      </Routes>
    </Router>
  );
}

export default App;



