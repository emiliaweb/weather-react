import './Search.scss';

import icon from './search.svg';

function Search() {
    return (
        <form className="search header-search">
            <div className="search-box">
                <input className="search-input" type="text" placeholder="Search"/>
                <button className="search-btn" type="submit">
                    <img src={icon} alt="Search"/>
                </button>
            </div>
        </form>
    )
}

export default Search;