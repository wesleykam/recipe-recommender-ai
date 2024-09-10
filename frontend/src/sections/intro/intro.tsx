import './intro.css';

const intro = () => {
    return (
        <>
            <div className="background">
                <div className="background-image img1" />
                <div className="background-image img2" />
                <div className="background-image img3" />
            </div>
            <section className="intro-section">
                <div className="container intro-container">
                    <h1>Recipe Recommender AI</h1>
                </div>
            </section>
        </>
    );
};

export default intro;
