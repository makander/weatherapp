import React from "react";
import WeatherIcon from "react-icons-weather";

/* const WeeklyForecast = props => {
    const currentDate
    const filteredList = props.forecast.list
      .filter(element => element.dt_txt.includes("12:00"))
      .map(element => <WeeklyInfo data={element} />);
      return <div className="row center-align">{filteredList}</div>;
  
  };
 */

const DailyOverview = props => {
    console.log(props)
  return (
    <div class="col s12 m4">
      <div class="card">
        <div class="card-content">
          <span class="card-title">Daily Overview</span>

          <p>{props.forecast.dt}</p>
          <p>D AKDKA WPKPAKW PPAW DKKDW</p>
        </div>
      </div>
    </div>
  );
};

export default DailyOverview;
