import { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
    const { recommendations, generateRecommendations } = useRecipeStore();

    useEffect(() => {
        generateRecommendations();
    }, [generateRecommendations]);

    return (
        <div>
            <h2>Recommended for You</h2>
            {recommendations.length === 0 ? (
                <p>No recommendations yet. Add some favorites!</p>
            ) : (
                recommendations.map((recipe) => (
                    <div key={recipe.id} style={{ marginBottom: '1rem' }}>
                        <h3>{recipe.title}</h3>
                        <p>{recipe.description}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default RecommendationsList;
