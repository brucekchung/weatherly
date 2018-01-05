import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className="card">
      <p>{props.time}</p>
      <img src={props.image} />
      <p>{props.temp}</p>
    </div>
  )
}

export default Card