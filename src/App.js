import React, { Component } from 'react';
import './App.css';

import Card from './components/card/card';

class App extends Component {
  render() {
    return (
      <div className="weather-wrapper">
        <Card place="Newyork"/>
        <Card place="Milano"/>
        <Card place="Budapest"/>
      </div>
    );
  }
}

export default App;
