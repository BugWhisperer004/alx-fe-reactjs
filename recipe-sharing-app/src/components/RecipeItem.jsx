import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeItem = ({ recipe }) => {
    const toggleFavorite = useRecipeStore((state) => state.toggleFavorite);

    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
            <Link to={`/recipe/${recipe.id}`}>
                <h3>
                    {recipe.title} {recipe.favorite && <span style={{ color: 'gold' }}>★</span>}
                </h3>
            </Link>
            <p>{recipe.description}</p>

            <div style={{ display: 'flex', gap: '10px' }}>
                <Link to={`/edit/${recipe.id}`}>
                    <button>Edit</button>
                </Link>

                <DeleteRecipeButton id={recipe.id} />

                <button onClick={() => toggleFavorite(recipe.id)}>
                    {recipe.favorite ? 'Unfavorite' : 'Favorite'}
                </button>
            </div>
        </div>
    );
};

export default RecipeItem;


