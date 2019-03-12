import React from "react";
import WeatherIcon from "react-icons-weather";
import TimeConverter from "./TimeConverter";

const DailyCard = ({
  weather: {
    name,
    dt,
    weather: [{ id }],
    sys: { sunrise, sunset },
    main: { temp, humidity },
    wind: { speed }
  },
  forecast
}) => {
  return (
    <div className="col s12 m4">
      <div className="card" id="dailycard">
        <div className="card-content">
          <span className="card-title">{name}</span>
          <WeatherIcon
            name="owm"
            iconId={id.toString()}
            flip="horizontal"
            rotate="90"
            id="dailyCardIcon"
          />
          <p> Temperature: {temp} &#176; </p>
          <p> Humidity: {humidity} %</p>
          <p> Wind: {speed} m/s</p>
          <p> Sunset: {TimeConverter([sunset])}</p>
          <p> Sunrise: {TimeConverter([sunrise])}</p>
        </div>
      </div>
    </div>
  );
};

export default DailyCard;
