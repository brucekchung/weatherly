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
    return (
      <div>
        <label htmlFor="search">Please enter a city</label>
        <input type="text" 
               id="search"
               onChange={this.handleChange}
        />
        <button onClick={this.props.test()} >Search</button>
      </div>
    )
  }
}