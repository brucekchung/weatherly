import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';
import Search from './Search.js';
import SevenHour from './SevenHour.js';
import TenDay from './TenDay.js';
import mock from './mock.js';
//w key = bdf79fbe0e2610e8


class App extends Component {
  constructor() {
    super()

    this.state = {}
  }

  test() {
    console.log('works!!!')
  }

  render() {
    const sevenHours = mock.hourly_forecast.slice(0, 7);
    const tenDay = mock.forecast.simpleforecast.forecastday;

    return (
      <div className='app'>
        <Search test={this.test} />
        <Header />
        <SevenHour forecast={sevenHours} />
        <TenDay forecast={tenDay} />

    </div>
    );
  }
}

export default App