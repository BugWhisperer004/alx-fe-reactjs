import { useState, useEffect } from "react";

function HomePage() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch("/src/data.json")
            .then((res) => res.json())
            .then((data) => setRecipes(data))
            .catch((err) => console.error("Error loading recipes:", err));
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                Recipe Sharing Platform
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {recipes.map((recipe) => (
                    <div
                        key={recipe.id}
                        className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-105 overflow-hidden"
                    >
                        <img
                            src={recipe.image}
                            alt={recipe.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-gray-900">
                                {recipe.title}
                            </h2>
                            <p className="text-gray-600 text-sm mt-2">{recipe.summary}</p>
                            <a
                                href={`/recipes/${recipe.id}`}
                                className="text-blue-500 hover:underline mt-3 inline-block"
                            >
                                View Details →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePage;
