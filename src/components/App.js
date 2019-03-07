import React, { Component } from 'react';
import DisplayCard from './DisplayCard';

class App extends Component {
 state = { long: null, lat: null};

 componentDidMount() {
  window.navigator.geolocation.getCurrentPosition(
    position => this.setState({
      long: position.coords.longitude, 
      lat: position.coords.latitude})  
  );
 }

fetch()



  render() {
    return (
      <div className="App">This is tha app comp. 
      <DisplayCard />
      </div>
    );
  }
}

export default App;
