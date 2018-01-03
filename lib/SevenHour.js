import React from 'react'
import Card from './Card.js'
//time, image, temp - return 7 items

const SevenHour = (props) => {
  return (
    <div>
      <h2>Seven Hour Forecast</h2>
      {
        //get seven items into array, map Card
        props.forecast.map(item => {
          return (<Card time={`${item.FCTTIME.hour}00`}
                        image={item.icon_url}
                        temp={`${item.temp.english} degrees`} />)
        })
      }
    </div>
  )
}


export default SevenHour