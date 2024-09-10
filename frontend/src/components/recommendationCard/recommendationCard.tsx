import { Recipe } from '../../sections/randomRecipe/randomRecipe';

import './recommendationCard.css';

interface recommendationCardProps {
    recipe: Recipe;
}

const recommendationCard = ({ recipe }: recommendationCardProps) => {
    const handleExpand = () => {
        const link: string = recipe?.link;

        const expandedCardContainer = document.getElementById(
            link
        ) as HTMLElement;
        const arrow = document.getElementById('arrow' + link) as HTMLElement;

        if (expandedCardContainer.style.maxHeight === '0px') {
            expandedCardContainer.style.maxHeight = '1000px';
            expandedCardContainer.classList.add('full');
            arrow.style.transform = 'rotate(180deg)';
            // expandedCardContainer.style.transform = 'scaleY(100%)';
        } else {
            expandedCardContainer.style.maxHeight = '0px';
            expandedCardContainer.classList.remove('full');
            arrow.style.transform = 'rotate(0deg)';
            // expandedCardContainer.style.transform = 'scaleY(0)';
        }
    };

    return (
        <div className="recommendation-card">
            <div
                className={`recommendation-card-collapsed ${recipe?.link}`}
                onClick={handleExpand}
            >
                <h4>{recipe?.title}</h4>
                <div
                    id={'arrow' + recipe?.link}
                    className="dropdown-arrow"
                    style={{ transform: 'rotate(0deg)' }}
                >
                    &#9660;
                </div>
            </div>
            <div
                id={recipe?.link}
                className="expanded-card-container"
                style={{ maxHeight: '0px' }}
            >
                <div className="recommendation-card-expanded">
                    <div className="directions">
                        <h4>Directions:</h4>
                        <ol className="list recipe-directions">
                            {recipe?.directions.map((direction, index) => (
                                <li key={index}>{direction}</li>
                            ))}
                        </ol>
                    </div>
                    <div className="ingredients">
                        <h4>Ingredients:</h4>
                        <ul className="list recipe-ingredients">
                            {recipe?.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                    <a href={`https://${recipe?.link}`}>View Recipe</a>
                </div>
            </div>
        </div>
    );
};

export default recommendationCard;
