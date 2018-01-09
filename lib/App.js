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
    this.getForecast();
  }

  getForecast() {
    api.getForecast(this.state.state, this.state.city)
      .then(data => {
        this.setState({forecast: data });
      });
  }

  setLocation() {
    this.setState({
      city: localStorage.city,
      state: localStorage.state,
      isWelcome: false
    });
    //lookup await() es7
    setTimeout(() => {
      this.getForecast();
    }, 500);
  }

  background() {
    return 'cold';
  }

  render() {
    return (
      <div className={this.background()} >
        {
          this.state.isWelcome ?
          <Welcome setLocation={this.setLocation} /> :
          <div>
            <Search setLocation={this.setLocation} />
            <div className="top-container">
              <Header forecast={this.state.forecast} />
              <SevenHour forecast={this.state.forecast} /> 
            </div>
            <TenDay forecast={this.state.forecast} />
          </div>
        }
    </div>
    );
  }
}

export default App;

App.propTypes = {
  setLocation: PropTypes.func,
  forecast: PropTypes.object
};