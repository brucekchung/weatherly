import React, {Component} from 'react';
import cityArray from './cityArray.js';
import './Search.css';
//import CompleteMe from '@brucekchung/complete-me';
//import CompleteMe from '../node_modules/complete-me';

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState( {input: e.target.value} )
  }

  handleClick(e) {
    //check to see if city is valid
    //send formatted city and state to local storage
    let cityState = this.state.input.split(', ')
    console.log('cityState: ', cityState)
    localStorage.setItem('city', cityState[0])
    localStorage.setItem('state', cityState[1])
    this.props.setLocation()
  } 

  render() {
    return (
      <div>
        <label htmlFor="search">Please enter a city</label>
        <input type="text" 
               id="search"
               onChange={this.handleChange}
        />
        <button onClick={this.handleClick} >Search</button>
      </div>
    )
  }
}