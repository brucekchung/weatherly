import React from 'react'
import './Card.scss'

const Card = (props) => {
  console.log('propstype ', props.type)
  return (
    <div className={props.type}>
      <p>{props.time}</p>
      <img src={props.image} />
      <p>{props.temp}</p>
    </div>
  )
}

export default Card