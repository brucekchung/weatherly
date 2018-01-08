import React from 'react'
import './Header.scss'

const Header = (props) => {
  if(props.forecast.forecast) {
    return (
      <div className="header">
        <h1>{props.forecast.current_observation.display_location.full}</h1>
        <h3>{props.forecast.forecast.simpleforecast.forecastday[0].date.weekday}</h3>
        <p>Current Forecast: {props.forecast.forecast.simpleforecast.forecastday[0].conditions}</p>
        <p>Current Temp: {props.forecast.current_observation.temp_f}</p>
        <p>High: {props.forecast.forecast.simpleforecast.forecastday[0].high.fahrenheit}</p>
        <p>Low: {props.forecast.forecast.simpleforecast.forecastday[0].low.fahrenheit}</p>
        <p>Summary: {props.forecast.forecast.txt_forecast.forecastday[0].fcttext}</p>
      </div>
    )
  } else return <h2>Please select from the dropdown menu</h2>
}

export default Header