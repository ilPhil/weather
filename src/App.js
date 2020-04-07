import React from "react";
import fakeResponse from "./services/fakeData";
import "./App.css";

import Card from "./components/card";

export default function App() {
  return (
    <div className="weather-wrapper">
      <Card data={fakeResponse} />
      <Card data={fakeResponse} />
      <Card data={fakeResponse} />
    </div>
  );
}
