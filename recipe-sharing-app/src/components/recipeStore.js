import create from 'zustand';

export const useRecipeStore = create((set) => ({
    recipes: [],
    filteredRecipes: [],
    searchTerm: '',
    recommendations: [],

    // Add a new recipe
    addRecipe: (recipe) =>
        set((state) => {
            const recipeWithFavorite = { ...recipe, favorite: false };
            const updatedRecipes = [...state.recipes, recipeWithFavorite];
            return {
                recipes: updatedRecipes,
                filteredRecipes: updatedRecipes.filter((r) =>
                    r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
                ),
            };
        }),

    // Edit a recipe by ID
    editRecipe: (id, updatedRecipe) =>
        set((state) => {
            const updatedRecipes = state.recipes.map((recipe) =>
                recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
            );
            return {
                recipes: updatedRecipes,
                filteredRecipes: updatedRecipes.filter((r) =>
                    r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
                ),
            };
        }),

    // Delete a recipe by ID
    deleteRecipe: (id) =>
        set((state) => {
            const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== id);
            return {
                recipes: updatedRecipes,
                filteredRecipes: updatedRecipes.filter((r) =>
                    r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
                ),
                recommendations: state.recommendations.filter((rec) => rec.id !== id),
            };
        }),

    // Set the search term and filter recipes
    setSearchTerm: (term) =>
        set((state) => ({
            searchTerm: term,
            filteredRecipes: state.recipes.filter((recipe) =>
                recipe.title.toLowerCase().includes(term.toLowerCase())
            ),
        })),

    // Toggle favorite status of a recipe
    toggleFavorite: (id) =>
        set((state) => {
            const updatedRecipes = state.recipes.map((recipe) =>
                recipe.id === id ? { ...recipe, favorite: !recipe.favorite } : recipe
            );
            return {
                recipes: updatedRecipes,
                filteredRecipes: updatedRecipes.filter((r) =>
                    r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
                ),
            };
        }),

    // Generate mock recommendations based on favorites
    generateRecommendations: () =>
        set((state) => {
            const recommended = state.recipes.filter(
                (recipe) => recipe.favorite && Math.random() > 0.5
            );
            return { recommendations: recommended };
        }),
}));


