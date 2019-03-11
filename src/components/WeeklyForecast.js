import React from "react";
import WeatherIcon from "react-icons-weather";
import DayConverter from "./DayConverter";

const WeeklyInfo = props => {
  return (
    <div className="col s6 l2">
      <div className="card-panel">
        <p>{DayConverter(props.data.dt)}</p>
        <WeatherIcon
          className="icon"
          name="owm"
          iconId={props.data.weather[0].id.toString()}
          flip="horizontal"
          rotate="90"
        />
        <p>{props.data.main.temp} &#8451;</p>
      </div>
    </div>
  );
};

const WeeklyForecast = props => {
  const filteredList = props.forecast.list
    .filter(element => element.dt_txt.includes("12:00"))
    .map(element => <WeeklyInfo data={element} />);
  return <div className="row">{filteredList}</div>;
};

export default WeeklyForecast;
