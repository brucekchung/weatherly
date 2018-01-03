import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';
import Search from './Search.js';
import SevenHour from './SevenHour.js';
import TenDay from './TenDay.js';
import mock from './mock.js';

class App extends Component {

  render() {
    const sevenHours = mock.hourly_forecast.slice(0, 7);
    const tenDay = mock.forecast.simpleforecast.forecastday;

    return (
      <div className='app'>
        <Search />
        <Header />
        <SevenHour forecast={sevenHours} />
        <TenDay forecast={tenDay} />

    </div>
    );
  }
}

export default App