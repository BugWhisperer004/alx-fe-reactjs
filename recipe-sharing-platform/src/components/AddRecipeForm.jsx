import { useState } from "react";

function AddRecipeForm() {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [steps, setSteps] = useState("");
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (!title.trim()) {
            newErrors.title = "Recipe title is required.";
        }

        if (!ingredients.trim()) {
            newErrors.ingredients = "Ingredients are required.";
        } else {
            const ingredientList = ingredients.split(",").map((item) => item.trim());
            if (ingredientList.length < 2) {
                newErrors.ingredients = "Please list at least two ingredients.";
            }
        }

        if (!steps.trim()) {
            newErrors.steps = "Preparation steps are required.";
        }

        setErrors(newErrors);

        // ✅ Returns true if no errors
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        console.log("New Recipe Submitted:", { title, ingredients, steps });

        // Reset form
        setTitle("");
        setIngredients("");
        setSteps("");
        setErrors({});
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg space-y-4"
        >
            <h2 className="text-2xl font-bold text-center">Add New Recipe</h2>

            {/* Title Input */}
            <div>
                <label className="block text-gray-700 font-medium">Recipe Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border rounded-lg p-2 mt-1 focus:ring focus:ring-blue-300"
                    placeholder="Enter recipe title"
                />
                {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
            </div>

            {/* Ingredients Input */}
            <div>
                <label className="block text-gray-700 font-medium">
                    Ingredients (comma-separated)
                </label>
                <textarea
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    className="w-full border rounded-lg p-2 mt-1 focus:ring focus:ring-blue-300"
                    placeholder="e.g., Sugar, Flour, Eggs"
                ></textarea>
                {errors.ingredients && (
                    <p className="text-red-500 text-sm">{errors.ingredients}</p>
                )}
            </div>

            {/* Steps Input */}
            <div>
                <label className="block text-gray-700 font-medium">
                    Preparation Steps
                </label>
                <textarea
                    value={steps}
                    onChange={(e) => setSteps(e.target.value)}
                    className="w-full border rounded-lg p-2 mt-1 focus:ring focus:ring-blue-300"
                    placeholder="Write the steps to prepare the recipe"
                ></textarea>
                {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
                Submit Recipe
            </button>
        </form>
    );
}

export default AddRecipeForm;
