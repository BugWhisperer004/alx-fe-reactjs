import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

const App = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>🍲 Recipe Sharing App</h1>
      <AddRecipeForm />
      <hr style={{ margin: '2rem 0' }} />
      <RecipeList />
    </div>
  );
};

export default App;

