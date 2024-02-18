import {createContext, useContext, useState} from "react";
import {API_PROFILE, WEATHER_PROFILE} from "./api_profile";

const AppContext = createContext()

export const useAPP = () => {
    return useContext(AppContext)
}

export const AppProvider = ({children}) => {
    const [globalState, setGlobalState] = useState([])
    const [weatherState, setWeather] = useState([]);
    const [weatherIndex, setWeatherIndex] = useState(0);
    
    const get_data = async (...obj) => {
        const searchValue = obj[0] || "ukraine"
        try {
            const response = await fetch(`${API_PROFILE.apiUrl}?q=${searchValue}&apiKey=${API_PROFILE.apiKey}`)

            const data = await response.json()
            setGlobalState(data);
            return globalState
        } catch (error) {
            console.log(error)
        }
    }

    const getWeatherData = async (...objValue) => {
        const searchValue = objValue[0] || "auto:ip";
        try {
            const response = await fetch(
                `${WEATHER_PROFILE.start_url}${objValue[1]}?${WEATHER_PROFILE.api_key}&q=${searchValue}&aqi=yes&lang=uk&${objValue[2]}`
            );
            const data = await response.json();
            setWeather(data);
            return data;
        } catch (error) {
            console.error(error);
        }
    };

    const updateWeatherState = (newIndex) => {
        setWeatherIndex(newIndex);
    };

    function updateWeatherIndex(index) {
        setWeatherIndex(index)
    }
     
    return <AppContext.Provider value={{
        get_data, 
        globalState,
        weatherState,
        weatherIndex,
        getWeatherData,
        updateWeatherState,
        updateWeatherIndex
    }}>
        {children}
    </AppContext.Provider>
}