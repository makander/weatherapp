import React from "react";

const Header = props => {
  
    return (
      <nav>
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <button
                className="waves-effect waves-light btn-small"
                onClick={e => {
                  e.preventDefault();
                  props.getWeather("imperial");
                }}>
                Imperial
              </button>
            </li>
            <li>
              <button
                className="waves-effect waves-light btn-small"
                onClick={e => {
                  e.preventDefault();
                  props.getWeather("metric");
                }}>
                Metric
              </button>
            </li>
          </ul>
        </div>
      </nav>
    );
  
};

export default Header;
