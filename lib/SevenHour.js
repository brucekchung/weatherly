import React from 'react'
import Card from './Card.js'
import './SevenHour.scss'

const SevenHour = (props) => {
  let sevenHours = props.forecast.hourly_forecast;
  return (
    <div className="seven">
      {
        props.forecast.hourly_forecast && 
        sevenHours.slice(0, 7).map(item => {
          return (<Card type="seven-hour"
                        time={`${item.FCTTIME.hour}00`}
                        image={item.icon_url}
                        temp={`${item.temp.english}℉`} />)
        })
      }
    </div>
  )
}

export default SevenHour