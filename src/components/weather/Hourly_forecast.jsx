import React from "react";
import s from "../../style/weather_local.module.css";
import {useAPP} from "../../utils/context";
import {formatTime} from "../../utils/formatDate";
import windIcon from '../../assets/windIcon.png'

export function Hourly_forecast({dayIndex}) {
    const {weatherState, weatherIndex} = useAPP()

    const forecastData = weatherState.forecast?.forecastday[weatherIndex].hour
    return (
        <div className={s.hourly_forecast_container}>
            <h1>Weather forecast</h1>

            <ul style={{
                display: "flex", 
                overflow: "auto", 
                listStyle: "none", 
                padding: "0", 
                margin: "0 80px",
                justifyContent: "space-between"
            }}>
                {forecastData?.slice(0, 5).map(item => {
                    return (
                        <li style={{
                            borderRadius: "10px", 
                            padding: "10px 15px",
                            backgroundColor: "#F88508"
                        }}>
                            <p style={{margin: "0"}}>{formatTime(new Date(item.time))}</p>
                            <img src={item.condition.icon} alt=""/>
                            <p style={{margin: "0"}}>{Math.round(item.temp_c)}°C</p>
                            <img src={windIcon} alt="" style={{rotate: `${item.wind_degree}deg`}}/>
                            <p style={{margin: "0"}}>{item.wind_kph} km/h</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}