import { useRecipeStore } from './recipeStore';
import RecipeItem from './RecipeItem';

const RecipeList = () => {
    const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

    return (
        <div>
            <h2>Recipe List</h2>
            {filteredRecipes.length === 0 ? (
                <p>No recipes found.</p>
            ) : (
                filteredRecipes.map((recipe) => (
                    <RecipeItem key={recipe.id} recipe={recipe} />
                ))
            )}
        </div>
    );
};

export default RecipeList;



