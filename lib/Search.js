import React, {Component} from 'react';
import cityArray from './cityArray.js';
import './Search.scss';
import CompleteMe from '../node_modules/complete-me/lib/Trie.js';
const trie = new CompleteMe()

trie.populate(cityArray.data)

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      input: '',
      //suggestOn: false,
      suggestions: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({input: e.target.value});
    if (e.target.value.length > 2) {
      this.state.suggestions = trie.suggest(e.target.value);
    } else this.state.suggestions = [];
    //this.setState({suggestOn: true})

  }

  handleClick(e) {
    let cityState = this.state.input.split(', ')
    localStorage.setItem('city', cityState[0])
    localStorage.setItem('state', cityState[1])
    this.props.setLocation()
  } 

  render() {
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