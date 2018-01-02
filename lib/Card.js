import React from 'react'
import mock from './mock.js'
import './Card.css'

const Card = () => {
  {
  //the name of the current city
  //the current condition
  //the current day
  //the current temperature
  //the expected high and expected low for the day
  //a summary of what the weather is going to be like that day 
  //(“Windy, chance of a few late night showers. Lows overnight in the mid 50s.)
  }

  const currentCity = mock.current_observation.display_location.full
  const current = mock.forecast.simpleforecast.forecastday //gives an array
  const currentTemp = mock.current_observation.temp_f
  const summary = mock.forecast.txt_forecast.forecastday //array

  
  return (
    <div className="card">
      <p>Current Forecast: {current[0].conditions}</p>
      <p>Current Day: {current[0].date.weekday}</p>
      <p>Current Temp: {currentTemp}</p>
      <p>High: {current[0].high.fahrenheit}</p>
      <p>Low: {current[0].low.fahrenheit}</p>
      <p>Summary: {summary[0].fcttext}</p>
    </div>
  )
}



export default Card