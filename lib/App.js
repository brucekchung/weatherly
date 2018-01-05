import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Welcome.js';
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
      forecast: {},
      isWelcome: true
    }
    this.getForecast = this.getForecast.bind(this)
    this.test = this.test.bind(this)
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
    console.log('cats')
    this.setState({isWelcome: false})
  }


  render() {
    return (
      <div className='app'>
      {
        this.state.isWelcome ?
        <Welcome test={this.test}/> :
        <Search test={this.test} />
      }
        {
          this.state.forecast &&
          <div>
            <Header forecast={this.state.forecast} />
            <SevenHour forecast={this.state.forecast} /> 
            <TenDay forecast={this.state.forecast} />
          </div>
        }
    </div>
    );
  }
}

export default App