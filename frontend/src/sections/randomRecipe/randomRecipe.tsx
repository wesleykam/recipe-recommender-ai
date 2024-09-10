import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import axios from 'axios';

import './randomRecipe.css';

// Create Recipe Type for TypeScript
export type Recipe = {
    id: number;
    title: string;
    directions: string[];
    ingredients: string[];
    link: string;
};

interface randomRecipeProps {
    setRecommendations: Dispatch<SetStateAction<Recipe[]>>
}

const randomRecipe = ({ setRecommendations }: randomRecipeProps) => {
    const [recipe, setRecipe] = useState<Recipe>();

    const apiURL = import.meta.env.VITE_PRODUCTION_API_URL;

    // Fetch a random recipe from the backend
    useEffect(() => {
        // Fetch recipe titles from the backend
        axios
            .get(
                // 'http://127.0.0.1:5000/random_recipe'
                `${apiURL}/random_recipe`
            )
            .then((response) => {
                console.log(response.data);
                setRecipe(response.data);
            })
            .catch((error) => {
                console.error(
                    'There was an error fetching the recipe titles!',
                    error
                );
            });
    }, []);

    const getRandomRecipe = () => {
        axios
            .get(
                // 'http://127.0.0.1:5000/random_recipe'
                `${apiURL}/random_recipe`
            )
            .then((response) => {
                console.log(response.data);
                setRecipe(response.data);
            })
            .catch((error) => {
                console.error(
                    'There was an error fetching the recipe titles!',
                    error
                );
            });
    };

    const getRecommendations = () => {
        axios
            .post(
                // 'http://127.0.0.1:5000/recommend',
                `${apiURL}/recommend`,
                {
                    input_movie: recipe?.title,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )
            .then((response) => {
                console.log(response.data);
                setRecommendations(response.data);
            })
            .catch((error) => {
                console.error(
                    'There was an error fetching the recommendations!',
                    error
                );
            });
    };

    return (
        <>
            <section className="random-recipe-section">
                <div className="container random-recipe-container">
                    <h2>Random Recipe</h2>
                    <div className="random-recipe">
                        {recipe ? (
                            <>
                                <div className="random-recipe-card">
                                    <h3>{recipe['title']}</h3>
                                    <div className="directions">
                                        <h4>Directions:</h4>
                                        <ol className="list recipe-directions">
                                            {recipe['directions'].map(
                                                (direction, index) => (
                                                    <li key={index}>
                                                        {direction}
                                                    </li>
                                                )
                                            )}
                                        </ol>
                                    </div>
                                    <div className="ingredients">
                                        <h4>Ingredients:</h4>
                                        <ul className="list recipe-ingredients">
                                            {recipe['ingredients'].map(
                                                (ingredient, index) => (
                                                    <li key={index}>
                                                        {ingredient}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                    <a href={`https://${recipe['link']}`}>
                                        View Recipe
                                    </a>
                                </div>
                                <div className="random-recipe-right">
                                    <div className="random-recipe-image">
                                        <img
                                            src="https://via.placeholder.com/350"
                                            alt="Recipe"
                                        />
                                    </div>
                                    <div className="random-recipe-selection">
                                        <button
                                            className="like"
                                            onClick={getRecommendations}
                                        >
                                            I Like It!
                                        </button>
                                        <button
                                            className="pass"
                                            onClick={getRandomRecipe}
                                        >
                                            Pass!
                                        </button>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default randomRecipe;
