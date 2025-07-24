import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import RecipeList from './components/RecipeList';
import AddRecipe from './components/AddRecipe';
import EditRecipe from './components/EditRecipe';
import RecipeDetails from './components/RecipeDetails';
import Favorites from './components/Favorites';
import Recommendations from './components/Recommendations';

import { useRecipeStore } from './components/recipeStore';

const App = () => {
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
          <Link to="/add" style={{ marginRight: '15px' }}>Add Recipe</Link>
          <Link to="/favorites" style={{ marginRight: '15px' }}>Favorites</Link>
          <Link
            to="/recommendations"
            onClick={generateRecommendations}
            style={{ marginRight: '15px' }}
          >
            Recommendations
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add" element={<AddRecipe />} />
          <Route path="/edit/:id" element={<EditRecipe />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recommendations" element={<Recommendations />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;



