'use strict';

import React, { Component } from 'react';
import Button from './button';
import Square from './square';
import Timer from './timer';

class App extends Component {

  constructor(props) {
    console.log('constructor');
    super(props)

    this.state = {
      time: 0,
      showTimer: true
    }
  }

  setColorSquare = (color) => {
    this.setState({
      color: color
    })
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    console.log('render');
    return (
      <div>
        <Timer time={ this.state.time } />
        <button onClick={() => this.setState({ time: this.state.time + 10 })}>Change Props</button>
      </div>
    )
  }
}

export default App;