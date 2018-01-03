import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';
import SevenHour from './SevenHour.js';
import TenDay from './TenDay.js';
import mock from './mock.js';

const App = () => {
  const sevenHours = mock.hourly_forecast.slice(0, 7);
  const tenDay = mock.forecast.simpleforecast.forecastday;

  return (
    <div className='app'>
      <Header />
      <SevenHour forecast={sevenHours} />
      <TenDay forecast={tenDay} />

  </div>
  );
}

export default App