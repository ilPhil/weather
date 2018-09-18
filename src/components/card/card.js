import React, { Component } from 'react';

import './card.css';
import map from '../../assets/map.svg';
import cloudLight from '../../assets/cloud-lightning.svg';
import sun from '../../assets/sun.svg'
import droplet from '../../assets/droplet.svg'
import wind from '../../assets/wind.svg'

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card__header">
          <img className="map-icon" src={map} alt="map-icon"/>
        </div>
        <div className="card__content">
          <div className="weather">
            <img className="weather__icon" src={cloudLight} alt="cloud-icon"/>
          </div>
          <div className="info">
            <div className="info__weather">
              <h1 className ="degrees">78°</h1>
              <div>
                <p className="weather-name"> Cloudy Skies </p>
                <p className="location"> Milano, Italia </p>
              </div>
            </div>
            <div className="info__date">
              <h1> MAY </h1>
              <h2> 21 </h2>
            </div>
          </div>
        </div>
        <div className="card__footer">
          <div className="item">
            <img src={wind} alt="wind-icon"/>
            <p> 2 MPH </p>
          </div>
          <div className="item">
            <img src={droplet} alt="wind-icon"/>
            <p> 33% </p>
          </div>
          <div className="item">
            <img  src={sun} alt="wind-icon"/>
            <p> 83% </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
