import React from "react";
import weatherIconsMap from "../../services/weatherIconsMap";
import Moment from "moment";

const CardContent = ({ name, country, city, degrees, date }) => (
  <div className="card__content">
    <div className="weather">
      <img
        className="weather__icon"
        src={weatherIconsMap(name)}
        alt="cloud icon"
      />
    </div>
    <div className="info">
      <div className="info__weather">
        <h1 className="degrees">{degrees}°</h1>
        <div>
          <p className="weather-name">{name}</p>
          <p className="location">
            {city}, {country}
          </p>
        </div>
      </div>
      <div className="info__date">
        <h1>{Moment(date).format("MMM").toUpperCase()}</h1>
        <h1>{Moment(date).format("DD")}</h1>
      </div>
    </div>
  </div>
);

export default CardContent;
