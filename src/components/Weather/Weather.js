import './Weather.scss';

import sunrise from './img/sunrise.svg';
import sunset from './img/sunset.svg';
import location from './img/location.svg';
import time from './img/time.svg';
import timezone from './img/timezone.svg';

function Weather() {
    return (
        <div className="weather card-weather">
            <div className="weather-main">
                <h2 className="title weather-title">Almaty</h2>
                <div className="weather-temp">38°C</div>
                <div className="weather-descr">Partly cloudy</div>
            </div>
            <div className="weather-more">
                <div className="divider-row weather-row weather-row--spb">
                    <div className="weather-info">
                        <div className="weather-info-title">42°C</div>
                        <div className="weather-info-descr">Real feel</div>
                    </div>
                    <div className="weather-info">
                        <div className="weather-info-title">3%</div>
                        <div className="weather-info-descr">Humidity</div>
                    </div>
                    <div className="weather-info">
                        <div className="weather-info-title">2m/s</div>
                        <div className="weather-info-descr">Wind</div>
                    </div>
                    <div className="weather-info">
                        <div className="weather-info-title">1007hPa</div>
                        <div className="weather-info-descr">Pressure</div>
                    </div>
                </div>
                <div className="divider-row weather-row weather-sun">
                    <div className="weather-sun-item">
                        <div className="weather-sun-icon">
                            <img src={sunrise} alt="Sunrise"/>
                        </div>
                        <div className="weather-sun-descr">06:44</div>
                    </div>
                    <div className="weather-sun-line">
                        <svg width="275" height="71" viewBox="0 0 275 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 69.3875C60.5744 -21.7339 221.317 -22.0618 274 70" stroke="#FFF9F9" strokeWidth="2"/>
                        </svg>
                    </div>
                    <div className="weather-sun-item">
                        <div className="weather-sun-icon">
                            <img src={sunset} alt="Sunset"/>
                        </div>
                        <div className="weather-sun-descr">19:02</div>
                    </div>
                </div>
                <div className="divider-row weather-row weather-time">
                    <div className="weather-time-item">
                        <div className="weather-time-icon">
                            <img src={location} alt="Location"/>
                        </div>
                        <div className="weather-time-title">Kazakhstan</div>
                    </div>
                    <div className="weather-time-item">
                        <div className="weather-time-icon">
                            <img src={timezone} alt="Timezone"/>
                        </div>
                        <div className="weather-time-title">UTC+06:00</div>
                    </div>
                    <div className="weather-time-item">
                        <div className="weather-time-icon">
                            <img src={time} alt="Time" />
                        </div>
                        <div className="weather-time-title">17:53</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather;