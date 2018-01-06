import React from 'react';
import Search from './Search.js';
import './Welcome.css';

export default class Welcome extends React.Component {
  render() {
    return (
      <div className="welcome-page">
        <h1>Welcome</h1>
        <Search setLocation={this.props.setLocation} />
      </div>
      )
  }
}