import React from "react";
import s from "../../style/weather_local.module.css";
import {formatDate, formatTime} from "../../utils/formatDate";

const DateLocation = (props) => {
  const { location } = props;
  
  if (!location || !location.localtime) {
    return null;
  }

  const localDateTime = new Date(location.localtime);

  return (
    <div className={`${s.local_container} ${s.container}`}>
      <ul className={s.date_box}>
        <li className={s.cityName}>{location.name}</li>
        <li className={s.time}>{formatTime(localDateTime)}</li>
        <li className={s.date}>{formatDate(localDateTime)}</li>
      </ul>
    </div>
  );
};

export default DateLocation;
