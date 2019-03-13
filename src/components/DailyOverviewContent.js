import React from "react";
import WeatherIcon from "react-icons-weather";
import UnixToDate from "./UnixToDate";
import TimeConverter from "./TimeConverter";

const DailyOverviewContent = props => {
  const today = UnixToDate(props.weather.dt);
  const filteredList = props.forecast.list
    .filter(element => element.dt_txt.includes(`${today}`))
    .map(element => <DailyOverViewCard data={element} />);
  return (
    <div className="col s12 m4">
      <div className="card">
        <div className="card-content">
          <span className="card-title">Daily Overview</span>
          {filteredList}
        </div>
      </div>
    </div>
  );
};

const DailyOverViewCard = ({
  data: {
    dt,
    main: { temp },
    weather: [{ id }]
  }
}) => {
  return (
    <div className="daily-ov-content">
      <WeatherIcon
        className="icon"
        name="owm"
        iconId={id.toString()}
        flip="horizontal"
        rotate="90"
      />
      <p>{TimeConverter(dt)}</p>
      <p>{temp} &#8451;</p>
    </div>
  );
};

export default DailyOverviewContent;
