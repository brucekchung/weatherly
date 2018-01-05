import React from 'react'
import Card from './Card.js';

const TenDay = (props) => {
  let tenDay = props.forecast.forecast
  return (
    <div>
      <h2>Ten Day Forecast</h2>
      {
        props.forecast.forecast &&
        tenDay.simpleforecast.forecastday.map(item => {
          return (<Card time={item.date.weekday}
                        image={item.icon_url}
                        temp={`${item.high.fahrenheit} high / ${item.low.fahrenheit} low`} />
          )
        })
      }
    </div>
  )
}




export default TenDay