import './Card.scss';

import { useEffect, useContext, useState } from 'react';

import Weather from '../Weather/Weather';
import Skeleton from '../Skeleton/Skeleton';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import useWeatherService from '../../Helpers/weatherService';
import WeatherContext from '../../contexts/weatherContext';

function setContent(process, data) {
    switch (process) {
        case 'confirmed':
            return <Weather data={data} />;
        case 'loading':
            return <Skeleton />;
        case 'error': 
            return <ErrorMessage />
    }
}

function Card() {
    const {getWeather, process} = useWeatherService();
    const {city} = useContext(WeatherContext);

    const [weather, setWeather] = useState();
    
    useEffect(() => {
        getWeather(city)
        .then((data) => {
            setWeather(data);
        })
    }, [city]);

    return (
        <div className="container">
            <div className="card">
                {setContent(process, weather)}
            </div>
        </div>
    )
}

export default Card;