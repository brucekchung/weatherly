import React from 'react';
import './Search.css';

export default class Search extends React.Component {
  constructor() {
    super();

    // this.state = {
    //   currentCity: ''
    // }

    // this.handleChange = this.handleChange.bind(this);
  }

  // handleChange (e) {
  //   this.setState({
  //     currentCity: e.target.value
  //   })
  // }

  render() {
    return (
      console.log('tequila')
      <label htmlFor="search">Please enter a city</label>
      <input type="text" id="search"/>
      )
  }
}