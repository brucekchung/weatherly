import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.js';
import mock from './mock.js';

const App = () => {
  const currentCity = mock.current_observation.display_location.full
  const currentCondition = mock.forecast.simpleforecast.forecastday //gives an array
  const currentDay = mock.forecast.simpleforecast.forecastday //as above
  const currentTemp = mock.current_observation.temp_f
  const highLow = mock.forecast.simpleforecast.forecastday
  
  return (
    <div className='app'>
      <h1>Current City: {currentCity}</h1>
      <Card />


  </div>
  );
}

export default App