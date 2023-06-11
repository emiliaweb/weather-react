import './ErrorMessage.scss';

import icon from './search.svg';

function ErrorMessage() {
    return (
        <div className="error">
            <h2 className="title error-title">City was not found</h2>
            <div className="error-img">
                <img src={icon} alt="Error occured" />
            </div>
            <div className="error-text">Try again</div>
        </div>
    )
}

export default ErrorMessage;