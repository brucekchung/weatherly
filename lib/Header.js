import React from 'react'
import './Header.css'
import mock from './mock.js'

const Header = (props) => {
  const currentCity = mock.current_observation.display_location.full
  const current = mock.forecast.simpleforecast.forecastday //gives an array
  const currentTemp = mock.current_observation.temp_f
  const summary = mock.forecast.txt_forecast.forecastday //array
  
  if(props.forecast.forecast) {
    console.log('props.forecast: ', props.forecast)
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