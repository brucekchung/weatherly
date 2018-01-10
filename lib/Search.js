import React, {Component} from 'react';
import cityArray from './cityArray.js';
import './Search.scss';
import CompleteMe from '../node_modules/complete-me/lib/Trie.js';
import PropTypes from 'prop-types';
const trie = new CompleteMe();

trie.populate(cityArray.data);

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      input: '',
      suggestions: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({input: e.target.value});
    if (e.target.value.length > 2) {
      this.setState({suggestions: trie.suggest(e.target.value.toLowerCase())});
    } else {
      this.setState({suggestions: []});
    }
  }

  handleClick() {
    let cityState = this.state.input.split(', ');

    this.props.setLocation(cityState[0], cityState[1]);
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
            this.state.suggestions.map(
              (suggestion, index) => <option value={suggestion} key= {index}/>)
          }
        </datalist>
        </label>
        <button className="srch-btn" onClick={this.handleClick} >Search</button>
      </div>
    );
  }
}

Search.propTypes = {
  setLocation: PropTypes.func
};