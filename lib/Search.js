import React, {Component} from 'react';
import cityArray from './cityArray.js';
import './Search.scss';
import CompleteMe from '../node_modules/complete-me/lib/Trie.js';

//console.log(cityArray.data)
const trie = new CompleteMe()
trie.populate(cityArray.data);
console.log(trie);

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      input: '',
      suggestOn: false,
      suggestions: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState( {input: e.target.value} );
    this.state.suggestions = trie.suggest(e.target.value);
    this.setState({suggestOn: true})

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
    //console.log('stuff', CompleteMe)
    return (
      <div className="search-box">
        <label htmlFor="search">
        <input className="srch-input" 
              placeholder="City, State"
              type="text" 
              id="search"
              onChange={this.handleChange}
              list="comp-me"
        />
        <datalist id="comp-me">
          {
            this.state.suggestions.map(suggestion => <option value={suggestion} />)
          }
        </datalist>
        </label>
        <button className="srch-btn" onClick={this.handleClick} >Search</button>
      </div>
    )
  }
}