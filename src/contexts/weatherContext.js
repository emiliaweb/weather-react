import { createContext, useState } from "react";

const WeatherContext = createContext();

export function WeatherProvider({children}) {
    const [city, setCity] = useState('Almaty');

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