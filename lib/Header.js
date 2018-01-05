import React from 'react'
import './Header.css'

const Header = (props) => {
  if(props.forecast.forecast) {
    return (
      <div className="header">
        <h1>Current City: {props.forecast.current_observation.display_location.full}</h1>
        <p>Current Forecast: {props.forecast.forecast.simpleforecast.forecastday[0].conditions}</p>
        <p>Current Day: {props.forecast.forecast.simpleforecast.forecastday[0].date.weekday}</p>
        <p>Current Temp: {props.forecast.current_observation.temp_f}</p>
        <p>High: {props.forecast.forecast.simpleforecast.forecastday[0].high.fahrenheit}</p>
        <p>Low: {props.forecast.forecast.simpleforecast.forecastday[0].low.fahrenheit}</p>
        <p>Summary: {props.forecast.forecast.txt_forecast.forecastday[0].fcttext}</p>
      </div>
    )
  } else return <h1>Information pending</h1>
}

export default Header