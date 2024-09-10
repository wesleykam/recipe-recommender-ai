import { Dispatch, SetStateAction } from 'react';
import './toggle.css';

interface toggleProp {
    setMode: Dispatch<SetStateAction<Boolean>>;
}

const toggle = ({ setMode }: toggleProp) => {
    const toRandom = () => {
        setMode(true);

        const custom = document.querySelector('.custom');
        const random = document.querySelector('.random');

        if (custom && random) {
            custom.classList.remove('selected');
            random.classList.add('selected');
        }
    };

    const toCustom = () => {
        setMode(false);

        const custom = document.querySelector('.custom');
        const random = document.querySelector('.random');

        if (custom && random) {
            random.classList.remove('selected');
            custom.classList.add('selected');
        }
    };

    return (
        <section className="toggle-section">
            <div className="container toggle-container">
                <h4>Select Mode</h4>
                <div className="toggles">
                    <button className="random selected" onClick={toRandom}>
                        Random
                    </button>
                    <button className="custom" onClick={toCustom}>
                        Custom
                    </button>
                </div>
            </div>
        </section>
    );
};

export default toggle;
