import React from "react";
import WeatherIcon from "react-icons-weather";
import TimeConverter from "./TimeConverter";

const DisplayCard = ({

  weather: {
    name,
    dt,
    weather: [{ id, description }],
    sys: { sunrise, sunset },
    main: { temp, humidity }
  }
}) => {
  return (
    <div className="col s12 m">
      <h2 className="header">{name}</h2>
      <div className="card horizontal">
        <div className="card-image">
          <WeatherIcon name="owm" iconId={id} flip="horizontal" rotate="90" />
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p> Temperature: {temp} </p>
            <p> {description}</p>
            <p> Humidity: {humidity}</p>
            <p> Sunset: {TimeConverter([sunset])}</p>
            <p> Sunrise: {TimeConverter([sunrise])}</p>
            <p> Time: {TimeConverter(dt)} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayCard;
