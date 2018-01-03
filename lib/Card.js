import React from 'react'
import './Card.css'
//day, image, hi/low - return 10 items

const Card = (props) => {
  return (
    <div className="card">
      <p>{props.time}</p>
      <img src={props.image} />
      <p><span>Temperature </span>{props.temp}</p>
      <p><span>High </span>{props.high}</p>
      <p><span>Low </span>{props.low}</p>
    </div>
  )
}

export default Card