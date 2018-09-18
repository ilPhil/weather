import React, { Component } from 'react';

import './card.css';
import map from '../../assets/map.svg';
import cloudLight from '../../assets/cloud-lightning.svg';
import sun from '../../assets/sun.svg'
import droplet from '../../assets/droplet.svg'
import wind from '../../assets/wind.svg'

class Card extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: null,
      city:null,
      country:null,
      degrees:null,
      wind:null,
      humidity:null,
      visibility:null,
    }
  }

  componentDidMount() {
     this.setState({ isLoading: true });

     fetch(`https://query.yahooapis.com/v1/public/yql?q=select%20location%2C%20wind%2C%20atmosphere%2C%20item.condition%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${this.props.place}%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys)`)
       .then(response => {
         if (response.ok) {
           return response.json();
         } else {
           throw new Error('ERROR');
         }
       })
       .then(data => this.setState(
         {
           name: data.query.results.channel.item.condition.text,
           city:data.query.results.channel.location.city,
           country:data.query.results.channel.location.country,
           degrees:data.query.results.channel.item.condition.temp,
           wind:data.query.results.channel.wind.speed,
           humidity:data.query.results.channel.atmosphere.humidity,
           visibility:data.query.results.channel.atmosphere.visibility,
           isLoading: false }))

       .catch(error => this.setState({ error, isLoading: false }));
   }


  render() {

    console.log(this.state);
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
              <h1 className ="degrees">{this.state.degrees}°</h1>
              <div>
                <p className="weather-name">{this.state.name}</p>
                <p className="location"> {this.state.city}, {this.state.country} </p>
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
            <p> {this.state.wind} MPH </p>
          </div>
          <div className="item">
            <img src={droplet} alt="humidity-icon"/>
            <p> {this.state.humidity}% </p>
          </div>
          <div className="item">
            <img  src={sun} alt="hot-icon"/>
            <p> {this.state.visibility}% </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
