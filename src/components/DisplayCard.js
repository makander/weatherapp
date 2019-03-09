import React from 'react';
import WeatherIcon from 'react-icons-weather';




const DisplayCard = (props) => {
    return (  
        <div className="col s12 m">
        <h2 className="header">{props.weather.name}</h2>
        <div className="card horizontal">
          <div className="card-image">
          <WeatherIcon name="owm" iconId={props.weather.weather[0].id} flip="horizontal" rotate="90" />
          
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p>{props.weather.name}</p>
              <p>{props.weather.main.temp}</p>
              <p>{props.weather.weather[0].description}</p>
              
            </div>
            </div>
          </div>
        </div>
    )
}

export default DisplayCard;