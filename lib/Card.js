import React from 'react'
import './Card.css'
//day, image, hi/low - return 10 items

const Card = (props) => {
  return (
    <div className="card">
      <p>{props.time}</p>
      <img src={props.image} />
      <p>{props.temp}</p>
      {
        //props.temp.map(item => <p>{item}</p>)
      }
    </div>
  )
}

export default Card