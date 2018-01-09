import React from 'react';
import Search from './Search.js';
import './Welcome.scss';
import PropTypes from 'prop-types';

export default class Welcome extends React.Component {
  render() {
    return (
      <div className="welcome-page">
        <div className="center-box">
        <h1>Welcome to <span className="title">Weathrly</span></h1>
        <Search setLocation={this.props.setLocation} />
        </div>
      </div>
    );
  }
}

Welcome.propTypes = {
  setLocation: PropTypes.string
};