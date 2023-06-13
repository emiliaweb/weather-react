import './Weather.scss';

import sunriseIcon from './img/sunrise.svg';
import sunsetIcon from './img/sunset.svg';
import locationIcon from './img/location.svg';
import timeIcon from './img/time.svg';
import timezoneIcon from './img/timezone.svg';

import { useEffect, useState } from 'react';

function getCountryName(code) {
    const name = new Intl.DisplayNames(['en'], {type: 'region'});
    return name.of(code);
}

function msToTime(ms) {
    const hours = Math.floor((ms  / (1000 * 60 * 60) ) % 24)
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const seconds = Math.floor((ms / 1000) % 60);

    return {hours, minutes, seconds};
}

function sToTime(s) {
    const hours = Math.floor((s  / (60 * 60) ) % 24)
    const minutes = Math.abs(Math.floor((s / 60) % 60));
    const seconds = Math.abs(Math.floor(s % 60));

    return {hours, minutes, seconds};
}

function getZero(n) {
    return n < 10 ? '0' + n : n;
}

function formatTimezone(timezone) {
    const timezoneObject = sToTime(timezone);

    let hours = getZero(timezoneObject.hours);
    if (timezoneObject.hours > 0) {
        hours = '+' + getZero(timezoneObject.hours);
    } else if (timezoneObject.hours < 0) {
        hours = '-' + getZero(Math.abs(timezoneObject.hours));
    } 

    const minutes = getZero(sToTime(timezone).minutes);

    return `${hours}:${minutes}`;
}

function getSunTime(sun, timezone) {
    const {hours, minutes} = msToTime((sun+timezone)*1000);
    return `${getZero(hours)}:${getZero(minutes)}`;
}

function getCurrentTime(timezone) {
    const currentLocalTime = new Date(Date.now());
    const currentTimeInTimezone = new Date(Date.now() + (timezone) + (currentLocalTime.getTimezoneOffset() * 60 * 1000)).toLocaleTimeString('en-GB');

    const pattern = /^([0-9]+:[0-9]+)/;
    const time = currentTimeInTimezone.match(pattern)[0];

    return time;
}

function Weather({data}) {
    const {weather, location, timezone, sunrise, sunset} = data;
    const {temp, humidity, pressure, feels, wind, descr} = weather;
    const {city, country} = location;
    
    const [currentTime, setCurrentTime] = useState(getCurrentTime(timezone * 1000));

    useEffect(() => {
        const interval = setInterval(() => {
            console.log(getCurrentTime(timezone * 1000));
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
                        <div className="weather-time-title">UTC{formatTimezone(timezone)}</div>
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