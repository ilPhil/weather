import React, { useState, useEffect } from "react";
import getCityWeather from "./services/api/getCityWeather";

import "./App.css";

import Card from "./components/card";

const cities = ["Milan", "London", "Paris"];

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getCityWeather(cities);
      const dataNormalized = data.reduce(
        (acc, el) => [
          ...acc,
          {
            id: el.id,
            name: el.weather[0].main,
            city: el.name,
            country: el.sys.country,
            degrees: el.main.temp,
            wind: el.wind.speed,
            humidity: el.main.humidity,
            visibility: el.visibility,
          },
        ],
        []
      );

      setData(dataNormalized);
    }

    fetchData();
  }, []);
  console.log(data);
  return (
    <div className="weather-wrapper">
      {data.map((city) => (
        <Card key={city.id} data={city} />
      ))}
    </div>
  );
}
