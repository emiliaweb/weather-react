import { createContext, useState } from "react";

const WeatherContext = createContext();

const cityName = localStorage.getItem('city') ?? 'Almaty';

export function WeatherProvider({children}) {
    const [city, setCity] = useState(cityName);

    const updateCity = (value) => {
        setCity(value);
    }

    return (
        <WeatherContext.Provider value={{city, updateCity}}>
            {children}
        </WeatherContext.Provider>
    );
} 

export default WeatherContext;