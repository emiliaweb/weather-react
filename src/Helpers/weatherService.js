import { useHTTP } from "./http.hook";

function getApiKey() {
    return process.env.REACT_APP_WEATHER_KEY;
}

function useWeatherService() {
    const {request, process, setProcess, clearError} = useHTTP();

    const _api = {
        base: 'https://api.openweathermap.org/data/2.5/weather?',
        key: getApiKey()
    }

    const getWeather = async (city = 'almaty', units = 'metric') => {
        const res = await request(`${_api.base}q=${city}&units=${units}&appid=${_api.key}`);
        return _transformWeather(res);
    }

    const _transformWeather = (data) => {
        return {
            weather: {
                temp: data.main.temp,
                humidity: data.main.humidity,
                pressure: data.main.pressure,
                feels: data.main.feels_like,
                wind: data.wind.speed,
                descr: data.weather[0].main,
            },
            location: {
                city: data.name,
                country: data.sys.country,
            },
            timezone: data.timezone,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset
        }
    }

    return {
        getWeather,
        process,
        setProcess,
        clearError
    }
}

export default useWeatherService;