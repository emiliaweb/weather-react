import './Weather.scss';

import sunriseIcon from './img/sunrise.svg';
import sunsetIcon from './img/sunset.svg';
import locationIcon from './img/location.svg';
import timeIcon from './img/time.svg';
import timezoneIcon from './img/timezone.svg';

import { useEffect, useState } from 'react';

import { getCountryName, getCurrentTime, getSunTime, formatTimezone } from '../../Helpers/time';

function Weather({data}) {
    const {weather, location, timezone, sunrise, sunset} = data;
    const {temp, humidity, pressure, feels, wind, descr} = weather;
    const {city, country} = location;
    
    const [currentTime, setCurrentTime] = useState(getCurrentTime(timezone * 1000));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(getCurrentTime(timezone * 1000));
        }, 60000); // update every minute

        return () => {
            clearInterval(interval);
        };
    }, [])

    return (
        <div className="weather card-weather">
            <div className="weather-main">
                <h2 className="title weather-title">{city}</h2>
                <div className="weather-temp">{Math.trunc(temp)}°C</div>
                <div className="weather-descr">{descr}</div>
            </div>
            <div className="weather-more">
                <div className="divider-row weather-row weather-row--spb">
                    <div className="weather-info">
                        <div className="weather-info-title">{Math.trunc(feels)}°C</div>
                        <div className="weather-info-descr">Real feel</div>
                    </div>
                    <div className="weather-info">
                        <div className="weather-info-title">{humidity}%</div>
                        <div className="weather-info-descr">Humidity</div>
                    </div>
                    <div className="weather-info">
                        <div className="weather-info-title">{Math.trunc(wind)}m/s</div>
                        <div className="weather-info-descr">Wind</div>
                    </div>
                    <div className="weather-info">
                        <div className="weather-info-title">{pressure}hPa</div>
                        <div className="weather-info-descr">Pressure</div>
                    </div>
                </div>
                <div className="divider-row weather-row weather-sun">
                    <div className="weather-sun-item">
                        <div className="weather-sun-icon">
                            <img src={sunriseIcon} alt="Sunrise"/>
                        </div>
                        <div className="weather-sun-descr">{getSunTime(sunrise, timezone)}</div>
                    </div>
                    <div className="weather-sun-line">
                        <svg width="275" height="71" viewBox="0 0 275 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 69.3875C60.5744 -21.7339 221.317 -22.0618 274 70" stroke="#FFF9F9" strokeWidth="2"/>
                        </svg>
                    </div>
                    <div className="weather-sun-item">
                        <div className="weather-sun-icon">
                            <img src={sunsetIcon} alt="Sunset"/>
                        </div>
                        <div className="weather-sun-descr">{getSunTime(sunset, timezone)}</div>
                    </div>
                </div>
                <div className="divider-row weather-row weather-time">
                    <div className="weather-time-item">
                        <div className="weather-time-icon">
                            <img src={locationIcon} alt="Location"/>
                        </div>
                        <div className="weather-time-title">{getCountryName(country)}</div>
                    </div>
                    <div className="weather-time-item">
                        <div className="weather-time-icon">
                            <img src={timezoneIcon} alt="Timezone"/>
                        </div>
                        <div className="weather-time-title">UTC{formatTimezone(timezone * 1000)}</div>
                    </div>
                    <div className="weather-time-item">
                        <div className="weather-time-icon">
                            <img src={timeIcon} alt="Time" />
                        </div>
                        <div className="weather-time-title">{currentTime}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather;