import React from 'react';
import Search from 'Search.js'

export default class Welcome extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
      <h1>Welcome</h1>
      <Search />
      </div>
      )
  }
}