import { useState } from 'react';

import Intro from './sections/intro/intro';
import Toggle from './sections/toggle/toggle';
import RandomRecipe, { Recipe } from './sections/randomRecipe/randomRecipe';
import CustomRecipe from './sections/customRecipe/customRecipe';
import Recommendations from './sections/recommendations/recommendations';

const App = () => {
    const [mode, setMode] = useState<Boolean>(true);
    const [recommendations, setRecommendations] = useState<Recipe[]>([]);

    return (
        <div>
            <Intro />
            <Toggle setMode={setMode} />
            {mode ? (
                <RandomRecipe setRecommendations={setRecommendations} />
            ) : (
                <CustomRecipe setRecommendations={setRecommendations} />
            )}
            <Recommendations recommendations={recommendations} />
        </div>
    );
};

export default App;
