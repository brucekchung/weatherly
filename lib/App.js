import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';
import Search from './Search.js';
import SevenHour from './SevenHour.js';
import TenDay from './TenDay.js';
import mock from './mock.js';
import api from './api.js'


class App extends Component {
  constructor() {
    super()

    this.state = {
      forecast: {}
    }
    this.getForecast = this.getForecast.bind(this)
  }

  componentDidMount() {
    this.getForecast('TX', 'Lubbock')
  }

  getForecast(state, city) {
    api.getForecast(state, city)
      .then(data => {
        this.setState({forecast: data })
        //console.log('appdata', this.state.forecast)

      })
  }

  test() {
    console.log('works')
  }

  render() {
    //const sevenHours = mock.hourly_forecast.slice(0, 7);
    // const tenDay = mock.forecast.simpleforecast.forecastday;

    return (
      <div className='app'>
        <Search test={this.test} />
        <Header />
        {
          this.state.forecast &&
          <div>
            <SevenHour forecast={this.state.forecast} /> 
            <TenDay forecast={this.state.forecast} />
          </div>
        }

    </div>
    );
  }
}

export default App