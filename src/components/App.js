import React from "react";
import DisplayCard from "./DisplayCard";
import DailyCard from "./DailyCard";

class App extends React.Component {
  state = {
    lat: null,
    long: null,
    weather: null,
    forecast: null
  };

  componentDidMount() {
    this.getPosition();
  }

getPosition = () => {
  navigator.geolocation.getCurrentPosition(position =>
    this.setState(
      {
      lat: position.coords.latitude,
      long: position.coords.longitude
    }, () => (this.getWeather())
  ))
}

getWeather = async () => {    
  const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.long}&appid=4521fff2c420c8b93faa362bf688ad05&units=metric`
    )
    const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.state.lat}&lon=${this.state.long}&appid=4521fff2c420c8b93faa362bf688ad05&units=metric`)
    const dailyWeather = await weatherResponse.json(); 
    const forecastData = await forecastResponse.json();
    this.setState({ weather: dailyWeather, forecast: forecastData });
  }

convertTime = (sec) => {
  var sec = '';
  var date = new Date(sec * 1000);
  var timestr = date.toLocaleTimeString();
  
  console.log(date, timestr);
}


  render() {
    if ( this.state.weather !== null ) {
      return ( <div> <DisplayCard weather={this.state.weather} />
        <DailyCard forecast={this.state.forecast} />
          {console.log(this.state)}
      </div> )
    } else {
      return <div>Loading data</div>
    }
  }
}

export default App;