import React, {useEffect, useState} from "react";
import {useAPP} from "../../utils/context";
import s from "../../style/weather_local.module.css";

const Forecast = () => {
    const {weatherState, updateWeatherIndex} = useAPP();
    const forecastData = weatherState.forecast?.forecastday;

    const formatDay = (date) => {
        const options = {weekday: "long", day: "numeric", month: "numeric"};
        return new Date(date).toLocaleDateString("uk-UA", options);
    };
    
    function onCurrentForecastClick(e) {
        const currentForecastIndex = forecastData.findIndex(item => item.date === e.currentTarget.id)
        updateWeatherIndex(currentForecastIndex)
    }

    return (
        <div
            className={`${s.container} ${s.current_container}`}
            style={{display: "block", height: "auto", width: "18vw", marginRight: "55px"}}
        >
            <h1 style={{fontSize: "2vw"}}>Погноз на 5 днів</h1>
            <ul style={{
                padding: "0",
                margin: "0"
            }}>
                {forecastData?.map((item) => (
                    <li
                        onClick={onCurrentForecastClick}
                        key={item.date}
                        style={{display: "flex", alignItems: "center", cursor: "pointer"}}
                        id={item.date}
                    >
                        {/* Виводимо іконку погоди */}
                        <img
                            src={item.day.condition.icon}
                            alt={item.day.condition.text}
                        />

                        {/* Виводимо середню температуру */}
                        <p
                            style={{
                                fontSize: "12px",
                                fontWeight: "900",
                                marginRight: "2vw",
                                marginLeft: "1vw",
                            }}
                        >
                            {Math.round(item.day.avgtemp_c)}°C
                        </p>

                        {/* Виводимо форматовану дату */}
                        <p style={{fontSize: "12px"}}>{formatDay(item.date)}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Forecast;
