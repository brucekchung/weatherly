import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Welcome.js';
import Header from './Header.js';
import Search from './Search.js';
import SevenHour from './SevenHour.js';
import TenDay from './TenDay.js';
import api from './api.js'

class App extends Component {
  constructor() {
    super()

    this.state = {
      forecast: null,
      city: localStorage.city,
      state: localStorage.state,
      isWelcome: true
    }
    this.getForecast = this.getForecast.bind(this)
    this.setLocation = this.setLocation.bind(this)
  }

  componentDidMount() {
    this.getForecast()
  }

  getForecast() {
    api.getForecast(this.state.state, this.state.city)
      .then(data => {
        this.setState({forecast: data })
      })
  }

  setLocation() {
    this.setState({
      city: localStorage.city,
      state: localStorage.state
    })
    this.getForecast();
    console.log('state', this.state.state, this.state.city)
  }

  render() {
    return (
      <div className='app'>
        {
          !this.state.forecast ?
          <Welcome setLocation={this.setLocation} /> :
          <div>
            <Search setLocation={this.setLocation} />
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