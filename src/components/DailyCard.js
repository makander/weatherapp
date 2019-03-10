import React from 'react';
import WeatherIcon from 'react-icons-weather';


const DailyCard = (props) => {
    return (  
        <div className="col s12 m">
        <div className="card horizontal">
          <div className="card-image">
          <div className="card-stacked">
            <div className="card-content">
              <p>{props.forecast.list[0].dt}</p>
              
            </div>
            </div>
          </div>
        </div>
        </div>
    )
}

export default DailyCard;