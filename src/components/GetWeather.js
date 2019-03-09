import React from 'react';

class GetWeather extends React.Component {
    
    
  getWeather = (props) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?${this.state.lat}&${this.state.lat}&appid=4521fff2c420c8b93faa362bf688ad05&units=metric`)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(error => {console.error(error)});
       
  }
    render () {
     return <div></div>
    };

}

export default GetWeather;