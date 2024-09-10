import './recommendations.css';
import { Recipe } from '../randomRecipe/randomRecipe';
import RecommendationCard from '../../components/recommendationCard/recommendationCard';

interface recommendationsProps {
    recommendations: Recipe[];
}

const recommendations = ({ recommendations }: recommendationsProps) => {
    console.log(recommendations);
    return (
        <section className="recommendations-section">
            <div className="container recommendations-container">
                <h2>Recommendations</h2>
                {recommendations.length !== 0 ? (
                    recommendations.map((recipe, index) => (
                        <RecommendationCard key={index} recipe={recipe} />
                    ))
                ) : (
                    <h4>Like a random suggestion for recommendations...</h4>
                )}
            </div>
        </section>
    );
};

export default recommendations;
