import './Card.scss';

import Weather from '../Weather/Weather';

function Card() {
    return (
        <div className="container">
            <div className="card">
                <Weather />
            </div>
        </div>
    )
}

export default Card;