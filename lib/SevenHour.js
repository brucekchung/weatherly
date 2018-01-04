import React from 'react'
import Card from './Card.js'
//time, image, temp - return 7 items

const SevenHour = (props) => {
  let sevenHours = props.forecast.hourly_forecast;
  return (
    <div>
      <h2>Seven Hour Forecast</h2>
      {
        props.forecast.hourly_forecast && 
        //console.log('forecast', props.forecast.hourly_forecast)
        
        sevenHours.slice(0, 7).map(item => {
          return (<Card time={`${item.FCTTIME.hour}00`}
                        image={item.icon_url}
                        temp={`${item.temp.english} degrees`} />)
        })
      }
    </div>
  )
}


export default SevenHour