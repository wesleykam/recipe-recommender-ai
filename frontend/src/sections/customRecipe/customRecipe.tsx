import { Dispatch, SetStateAction } from 'react';
import { Recipe } from '../randomRecipe/randomRecipe';
import axios from 'axios';

import './customRecipe.css';

interface customRecipeProp {
    setRecommendations: Dispatch<SetStateAction<Recipe[]>>;
}

const customRecipe = ({ setRecommendations }: customRecipeProp) => {
    // const [description, setDescription] = useState<string>('');
    // const [ingredients, setIngredients] = useState<string[]>([]);

    const apiURL = import.meta.env.VITE_PRODUCTION_API_URL;


    const getRecommendations = () => {

        // get the description and ingredients from the input fields
        const description = (document.querySelector('.description-input') as HTMLInputElement)?.value;
        const ingredients = (document.querySelector('.ingredients-input') as HTMLInputElement)?.value.split(',');

        if (description === '' || ingredients.length === 0) {
            alert('Please fill in the description and ingredients!');
            return;
        }

        axios
            .post(
                // 'http://127.0.0.1:5000/recommend',
                `${apiURL}/recommend`,
                {
                    custom_description: description,
                    custom_genres: ingredients,
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

    // const handleIngredients = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     // parse comma separated ingredients input into array of string
    //     const ingredientsArray = event.target.value.split(',');
    //     setIngredients(ingredientsArray);
    // };

    // const handleDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setDescription(event.target.value);
    // };

    return (
        <section className="custom-recipe-section">
            <div className="container custom-recipe-container">
                <h2>Custom Recipe</h2>
                <div className="custom-recipe-form">
                    <div className="input-section">
                        <h4>Enter your ingredients</h4>
                        <input
                            className="ingredients-input"
                            type="text"
                            placeholder="Ex: Apples, Oranges, Pears"
                            // onChange={handleIngredients}
                        />
                    </div>
                    <div className="input-section">
                        <h4>Enter your description</h4>
                        <input
                            className="description-input"
                            type="text"
                            placeholder="Enter the description"
                            // onChange={handleDescription}
                        />
                    </div>
                    <button onClick={getRecommendations}>
                        Get Recommendations
                    </button>
                </div>
            </div>
        </section>
    );
};

export default customRecipe;
