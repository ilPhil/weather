import React from "react";

import sun from "../../assets/sun.svg";
import droplet from "../../assets/droplet.svg";
import wind from "../../assets/wind.svg";

const CardFooter = ({ windStrength, humidity, visibility }) => (
  <div className="card__footer">
    <div className="item">
      <img src={wind} alt="wind-icon" />
      <p> {windStrength} MPH </p>
    </div>
    <div className="item">
      <img src={droplet} alt="humidity-icon" />
      <p>{humidity}%</p>
    </div>
    <div className="item">
      <img src={sun} alt="hot-icon" />
      <p>{visibility}%</p>
    </div>
  </div>
);

export default CardFooter;
