import React from "react";
import DisplayCard from "./DisplayCard";

class App extends React.Component {
  state = {
    lat: null,
    long: null,
    weather: null
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
  const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.long}&appid=4521fff2c420c8b93faa362bf688ad05&units=metric`
    )
    const data = await response.json(); 
    this.setState({weather: data});
    }

  render() {
    if ( this.state.weather !== null ) {
      return ( <div> <DisplayCard weather={this.state.weather} />
          {console.log(this.state)}
      </div> )
    } else {
      return <div>Loading data</div>
    }
  }
}

export default App;