import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((data) => {
                const selectedRecipe = data.find((item) => item.id === parseInt(id));
                setRecipe(selectedRecipe);
            });
    }, [id]);

    if (!recipe) {
        return <p className="text-center text-gray-500 mt-10">Loading recipe...</p>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4 text-center">{recipe.title}</h1>
            <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
            />

            {/* Ingredients */}
            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
                <ul className="list-disc list-inside space-y-1">
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index} className="text-gray-700">{ingredient}</li>
                    ))}
                </ul>
            </div>

            {/* Instructions */}
            <div>
                <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
                <ol className="list-decimal list-inside space-y-2">
                    {recipe.instructions.map((step, index) => (
                        <li key={index} className="text-gray-700">{step}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default RecipeDetail;
