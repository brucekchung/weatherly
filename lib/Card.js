import React from 'react';
import './Card.scss';

const Card = (props) => {
  return (
    <div className={props.type}>
      <h3>{props.time}</h3>
      <img src={props.image} />
      <h3>{props.temp}</h3>
    </div>
  )
}

export default Card;