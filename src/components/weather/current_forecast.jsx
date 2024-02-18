import React from "react";
import s from "../../style/weather_local.module.css";
import himiditly from "../../assets/weather/humidity.png";
import wind from "../../assets/weather/wind.png";
import presure from "../../assets/weather/pressure.png";
import uv from "../../assets/weather/uv-white.png";
const CurrentForecast = (props) => {
  const { current } = props;
  // console.log(current);

  if (!current) {
    return null;
  }

  return (
    <div className={`${s.container} ${s.current_container} ${s.current_forecast}`}>
      <div className={s.temp_box}>
        <p className={s.temp}>{Math.round(current.temp_c)}°C</p>
        <p>
          Відчувається, як:
          <br />{" "}
          <span className={s.temp_feel}>
            {Math.round(current.feelslike_c)} °C
          </span>
        </p>
      </div>

      <div className={s.condition}>
        <img src={current.condition.icon} alt="" />
        <p className={s}>{current.condition.text}</p>
      </div>

      <div className={s.metrix}>
        <div className={s} style={{ marginTop: "1vh" }}>
          <div className={s.metrix_card}>
            <img src={himiditly} alt="" />
            <p className={s.metrix_text}>{current.humidity}%</p>
            <p className={s.secondary_text}>Himiditly</p>
          </div>
          <div className={s.metrix_card}>
            <img src={wind} alt="" />
            <p className={s.metrix_text}>{current.wind_kph} km/h</p>
            <p className={s.secondary_text}>Wind Speed</p>
          </div>
        </div>

        <div className={s}>
          <div className={s.metrix_card}>
            <img src={presure} alt="" />
            <p className={s.metrix_text}>{current.pressure_mb} hPa</p>
            <p className={s.secondary_text}>Pressure</p>
          </div>
          <div className={s.metrix_card}>
            <img src={uv} alt="" />
            <p className={s.metrix_text}>{current.uv}</p>
            <p className={s.secondary_text}>UV</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentForecast;
