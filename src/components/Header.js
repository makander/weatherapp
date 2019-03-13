import React from "react";

const Header = props => {
  function handleClick(e) {
    e.preventDefault();
    props.getWeather("imperial");
    console.log("The link was clicked.");
  }

  {
    return (
      <nav class="navbar s12">
        <div class="nav-wrapper">
          <a href="#" class="brand-logo" />
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <form action="#">
                <button
                  className="waves-effect waves-light btn-small"
                  onClick={e => {
                    e.preventDefault();
                    props.getWeather("imperial");
                  }}
                >
                  Imperial
                </button>
                <button
                  className="waves-effect waves-light btn-small"
                  onClick={e => {
                    e.preventDefault();
                    props.getWeather("metric");
                  }}
                >
                  Metric
                </button>
              </form>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
};

export default Header;
