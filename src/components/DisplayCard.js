import React from 'react';




const DisplayCard = (props) => {
    return (  
        <div className="col s12 m">
        <h2 className="header">Horizontal Card</h2>
        <div className="card horizontal">
          <div className="card-image">
            <img src="https://lorempixel.com/100/190/nature/6"/>
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p>{props.name}</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default DisplayCard;