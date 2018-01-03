import React from 'react'
import Card from './Card.js';

const TenDay = (props) => {
  return (
    <div>
      <h2>Ten Day Forecast</h2>
      {
        props.forecast.map(item => {
          return (
                //console.log(item.date.weekday)
            <Card time={item.date.weekday}
                  image={item.icon_url}
                  temp={item.high.fahrenheit}
                   />
            )
        })
      }
    </div>
    )
}




export default TenDay