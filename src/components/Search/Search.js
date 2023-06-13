import './Search.scss';

import icon from './search.svg';

import { useContext, useState } from 'react';

import WeatherContext from '../../contexts/weatherContext';

function Search() {
    const [value, setValue] = useState('');

    const {updateCity} = useContext(WeatherContext);

    const onInput = (e) => {
        setValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        updateCity(value);
    }

    return (
        <form className="search header-search" onSubmit={onSubmit}>
            <div className="search-box">
                <input
                    onInput={onInput}
                    value={value}
                    className="search-input" 
                    type="text" 
                    placeholder="Search"/>
                <button className="search-btn" type="submit">
                    <img src={icon} alt="Search"/>
                </button>
            </div>
        </form>
    )
}

export default Search;