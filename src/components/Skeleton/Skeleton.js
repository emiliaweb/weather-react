import './Skeleton.scss';

function Skeleton() {
    return (
        <div className="skeleton">
            <div className="skeleton-block skeleton-block--200"></div>
            <div className="skeleton-block skeleton-block--temp skeleton-block--400"></div>
            <div className="skeleton-block skeleton-block--descr skeleton-block--200"></div>
            <div className="skeleton-rows">
                <div className="divider-row skeleton-row">
                    <div className="skeleton-block skeleton-block--300"></div>
                </div>
                <div className="divider-row skeleton-row">
                    <div className="skeleton-block skeleton-block--400"></div>
                </div>
                <div className="divider-row skeleton-row">
                    <div className="skeleton-block skeleton-block--100"></div>
                </div>
            </div>
        </div>
    )
}

export default Skeleton;