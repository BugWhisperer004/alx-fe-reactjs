import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeList = () => {
    const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

    return (
        <div>
            <h2>Recipe List</h2>
            {filteredRecipes.length === 0 && <p>No recipes found.</p>}
            {filteredRecipes.map((recipe) => (
                <div key={recipe.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                    <Link to={`/recipe/${recipe.id}`}>
                        <h3>{recipe.title}</h3>
                    </Link>
                    <p>{recipe.description}</p>

                    <Link to={`/edit/${recipe.id}`}>
                        <button>Edit</button>
                    </Link>

                    <DeleteRecipeButton id={recipe.id} />
                </div>
            ))}
        </div>
    );
};

export default RecipeList;


