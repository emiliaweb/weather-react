import './ErrorMessage.scss';

import icon from './search.svg';

function ErrorMessage({message}) {
    const info = message ?? 'City was not found';
    return (
        <div className="error">
            <h2 className="title error-title">{info}</h2>
            <div className="error-img">
                <img src={icon} alt="Error occured" />
            </div>
            <div className="error-text">Try again</div>
        </div>
    )
}

export default ErrorMessage;