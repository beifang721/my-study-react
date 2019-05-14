// import React, { Component } from 'react'
import React from 'react';
const Component = React.Component;

export default class App extends Component {
  render() {
    return (
      <ul className="my-list">
        <li>{false ? 'JSPang.com' : '技术胖'}</li>
        <li>I love React</li>
      </ul>
    )
  }
}
