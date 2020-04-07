import React from "react";
import Moment from "moment";

import CardHeader from "./CardHeader";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";

import "./card.css";

export default function Card({ data }) {
  const date = Moment();
  return (
    <div className="card">
      <CardHeader />
      <CardContent
        name={data.name}
        country={data.country}
        city={data.city}
        degrees={data.degrees}
        date={date}
      />
      <CardFooter
        windStrength={data.wind}
        humidity={data.humidity}
        visibility={data.visibility}
      />
    </div>
  );
}
