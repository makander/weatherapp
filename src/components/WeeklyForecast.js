import React from "react";
import WeatherIcon from "react-icons-weather";
import DayConverter from "./DayConverter";

const WeeklyForecast = props => {
  const filteredList = props.forecast.list
    .filter(element => element.dt_txt.includes("12:00"))
    .map(element => <WeeklyCard data={element} />);
  return (
    <div id="weeklyrow" className="row">
      {filteredList}
    </div>
  );
};

const WeeklyCard = ({
  data: {
    dt,
    main: { temp },
    weather: [{ id, description }]
  }
}) => {
  return (
    <div className="col s12 m2 l2">
      <div className="card-panel center-align">
        <p>{DayConverter(dt)}</p>
        <WeatherIcon
          className="icon"
          name="owm"
          iconId={id.toString()}
          flip="horizontal"
          rotate="90"
        />
        <p>{temp} &#176;</p>
      </div>
    </div>
  );
};

export default WeeklyForecast;
