import React, { Component } from 'react';
import Welcome from './Welcome.js';
import Header from './Header.js';
import Search from './Search.js';
import SevenHour from './SevenHour.js';
import TenDay from './TenDay.js';
import './App.scss';
import api from './api.js';
import PropTypes from 'prop-types';

class App extends Component {
  constructor() {
    super();

    this.state = {
      forecast: null,
      city: localStorage.city,
      state: localStorage.state,
      isWelcome: true
    };

    this.getForecast = this.getForecast.bind(this);
    this.setLocation = this.setLocation.bind(this);
  }

  componentDidMount() {
    let city = localStorage.getItem('city')
    let state = localStorage.getItem('state')

    if (localStorage.city) {
      this.getForecast(city, state);
    }
  }

  getForecast(city, state) {
    api.getForecast(city, state)
      .then(data => { 
        if (data) this.setState({ forecast: data })
      })

    setTimeout(() => {
      if (this.state.forecast.forecast) {
        localStorage.setItem('city', this.state.forecast.current_observation.display_location.city);
        localStorage.setItem('state', this.state.forecast.current_observation.display_location.state);
      }
    }, 500)
  }

  setLocation(city, state) {
    this.setState({
      city: city,
      state: state,
      isWelcome: false
    });

    this.getForecast(city, state);
  }

  background() {
    return 'cold';
  }

  render() {
    return (
      <div>
      { this.state.forecast &&
      <div className={this.background()}>
        <Search setLocation={this.setLocation} />
        <div className="top-container">
          <Header forecast={this.state.forecast} />
          <SevenHour forecast={this.state.forecast} /> 
        </div>
        <TenDay forecast={this.state.forecast} />
      </div>
      }

      { !this.state.forecast &&  
        <Welcome setLocation={this.setLocation} />
      } 
      </div>
    )
  }
}

export default App;

App.propTypes = {
  setLocation: PropTypes.func,
  forecast: PropTypes.object
};
