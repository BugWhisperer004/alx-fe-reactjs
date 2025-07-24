import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
    const { favorites, recipes } = useRecipeStore();
    const favoriteRecipes = favorites.map((id) =>
        recipes.find((recipe) => recipe.id === id)
    );

    return (
        <div>
            <h2>My Favorites</h2>
            {favoriteRecipes.length === 0 ? (
                <p>No favorites yet.</p>
            ) : (
                favoriteRecipes.map((recipe) => (
                    <div key={recipe.id} style={{ marginBottom: '1rem' }}>
                        <h3>{recipe.title}</h3>
                        <p>{recipe.description}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default FavoritesList;
