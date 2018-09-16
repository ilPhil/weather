import React, { Component } from 'react';

import './card.css'

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card__header"></div>
        <div className="card__content"></div>
        <div className="card__footer"></div>
      </div>
    );
  }
}

export default Card;
