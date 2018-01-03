import React, {Component} from 'react';
import './Search.css';

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      currentCity: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState( {currentCity: e.target.value} )
  }

  render() {
    console.log('tequila')
    return (
      <div>
        <label htmlFor="search">Please enter a city</label>
        <input type="text" id="search" />
      </div>
      )
  }
}