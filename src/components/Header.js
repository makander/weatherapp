import React from "react";
import cities from "./cityList.json";


class Header extends React.Component {
state = {
  searchValue: ''
}

SearchCity = ( search ) => {
  const city = cities.filter(city => city.name.toLowerCase().includes(search.toLowerCase()));
  console.log(city);
  console.log(city[0].coord.lat);
  let lat = city[0].coord.lat
  let long = city[0].coord.lon
  console.log(lat, long);
  this.props.searchWeather(lat, long);
}




render() 
  {
    return (
    <nav>
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="right">
          <li>

          <form onSubmit={e => {
                  e.preventDefault();
                  this.SearchCity(this.state.searchValue);
                  //this.props.searchWeather(this)
                  console.log(this.state);
                }}>


              <input type="text" value={this.state.searchValue} 
              onChange={e => this.setState({ searchValue: e.target.value })} placeholder="city"/>
            
            
            
              <button type="submit">Search</button>
            </form>

          </li>
          <li>
            <button
              className="waves-effect waves-light btn-small"
              onClick={e => {
                e.preventDefault();
                this.props.getWeather("imperial");
              }}
            >
              Imperial
            </button>
          </li>
          <li>
            <button
              className="waves-effect waves-light btn-small"
              onClick={e => {
                e.preventDefault();
                this.props.getWeather("metric");
              }}
            >
              Metric
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );}
};

export default Header;
