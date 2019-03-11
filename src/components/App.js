import React from "react";
import DisplayCard from "./DisplayCard";
import WeeklyForecast from "./WeeklyForecast";
import DailyOverview from "./DailyOverview";

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
        },
        () => this.getWeather()
      )
    );
  };

  getWeather = async () => {
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${
        this.state.lat
      }&lon=${
        this.state.long
      }&appid=4521fff2c420c8b93faa362bf688ad05&units=metric`
    );
    const forecastResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${
        this.state.lat
      }&lon=${
        this.state.long
      }&appid=4521fff2c420c8b93faa362bf688ad05&units=metric`
    );
    const dailyWeather = await weatherResponse.json();
    const forecastData = await forecastResponse.json();

    this.setState({ weather: dailyWeather, forecast: forecastData });
  };


  




  render() {
    if (this.state.weather !== null) {
      return (
        <div className="container ">
          <div className="row">
          <DisplayCard weather={this.state.weather} />
          <DailyOverview forecast={this.state.forecast} />
          </div>
          <WeeklyForecast forecast={this.state.forecast} />
          {console.log(this.state)}
        </div>
      );
    } else {
      return <div>Loading data</div>;
    }
  }
}

export default App;
