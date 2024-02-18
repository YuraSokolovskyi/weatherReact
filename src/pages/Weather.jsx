import React, {useEffect, useState} from "react";
import {useAPP} from "../utils/context";
import {WEATHER_PROFILE} from "../utils/api_profile";
import s from "../style/weather_local.module.css";
import DateLocation from "../components/weather/date_location";
import "../App.css";
import CurrentForecast from "../components/weather/current_forecast";
import Forecast from "../components/weather/forecast";
import {Hourly_forecast} from "../components/weather/Hourly_forecast";

const Weather = () => {
    const {weatherState, getWeatherData} = useAPP();
    const [weather, setWeather] = useState(weatherState);
    const [inputValue, setInputValue] = useState("");

    const forecastData = async () => {
        try {
            const result = await getWeatherData(
                inputValue,
                WEATHER_PROFILE.forecast_path,
                "days=5&aqi=no&alerts=no"
            );
            setWeather(result);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        // fetchWeatherData();
        forecastData();
    }, []);

    function handleInputChange(e) {
        setInputValue(e.target.value);
    }

    function onFormSubmit(e) {
        e.preventDefault();
        forecastData();
    }

    return (
        <div className={s.main_container}>
            <form onSubmit={onFormSubmit}>
                <input
                    type="text"
                    className={s.searchInput}
                    placeholder="What you want?"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button>Знайти</button>
            </form>
            <div
                style={{margin: "0, auto", marginTop: "38px", display: "flex"}}
                className="forecast_container"
            >
                <DateLocation location={weather.location}/>
                <CurrentForecast current={weather.current}/>
            </div>
            <div
                style={{margin: "0, auto", marginTop: "28px"}}
                className={s.forecast_container}
            >
                <Forecast/>
                <Hourly_forecast/>
            </div>
        </div>
    );
};

export default Weather;
