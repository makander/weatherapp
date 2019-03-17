import React from "react";
import cities from "./cityList.json";

class Header extends React.Component {
  state = {
    searchValue: ''
  };

  SearchCity = search => {
    const formattedSearch = search.charAt(0).toUpperCase() + search.slice(1);
    const city = cities.filter(city => city.name.includes(formattedSearch));

    if (city.length < 0) {
      alert("That is not a city, try again");
    }
    if (city.length == 0)
    alert("That is not a city, try again in english");
    else {
      let lat = city[0].coord.lat;
      let long = city[0].coord.lon;
      this.props.searchWeather(lat, long);
    }
  };

  render() {
    return (
      <header>
        <navbar>
          <div class="row">
            <div>
              <form
                class="col s12 m4 l8"
                onSubmit={e => {
                  e.preventDefault();
                  this.SearchCity(this.state.searchValue);
                  console.log(this.state);
                }}>
                <div class="row">
                  <div class="input-field col s8 m6 l8">
                    <input
                      type="text"
                      placeholder="search"
                      value={this.state.searchValue}
                      onChange={e =>
                        this.setState({ searchValue: e.target.value })
                      }
                    />
                  </div>
                  <button id="submit" className="waves-effect waves-light btn amber accent-3">
                    submit
                  </button>
                </div>
              </form>
            </div>
              <div className="hide-on-small-only">
              <a
              href="#"
              className="waves-effect waves-light btn right"
              onClick={e => {
                e.preventDefault();
                this.props.getWeather("metric");
              }}>
              Metric
            </a>
            <a
              href="#"
              className="waves-effect waves-light btn right"
              onClick={e => {
                e.preventDefault();
                this.props.getWeather("imperial");
              }}>
              Imperial
            </a></div>        
          
          </div>
        </navbar>
      </header>
    );
  }
}

export default Header;
