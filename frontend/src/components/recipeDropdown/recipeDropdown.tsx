import React, { useMemo, useState } from 'react';
import axios from 'axios';

const RecipeDropdown = () => {
    const [titles, setTitles] = useState<string[]>([]);
    const [selectedTitle, setSelectedTitle] = useState<string>('');

    const apiURL = import.meta.env.VITE_PRODUCTION_API_URL;

    useMemo(() => {
        // Fetch recipe titles from the backend
        axios
            .get(
                // 'http://127.0.0.1:5000/recipe_titles'
                `${apiURL}/recipe_titles`
            )
            .then((response) => {
                setTitles(response.data);
            })
            .catch((error) => {
                console.error(
                    'There was an error fetching the recipe titles!',
                    error
                );
            });
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTitle(event.target.value);
    };

    return (
        <div>
            <label htmlFor="recipe-select">Choose a recipe:</label>
            <select
                id="recipe-select"
                value={selectedTitle}
                onChange={handleChange}
            >
                <option value="">--Please choose an option--</option>
                {titles.map((title, index) => (
                    <option key={index} value={title}>
                        {title}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default RecipeDropdown;
