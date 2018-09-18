import React, { Component } from 'react';
import './App.css';

import Card from './components/card/card';

class App extends Component {
  render() {
    return (
      <div className="weather-wrapper">
        <Card place="Roma"/>
        <Card place="Milano"/>
        <Card place="Genova"/>
      </div>
    );
  }
}

export default App;
