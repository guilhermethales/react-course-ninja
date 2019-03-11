'use strict';

import React, { Component } from 'react';
import Button from './button';
import Square from './square';
import Timer from './timer';

class App extends Component {

  constructor(props) {
    console.log('constructor app');
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
    console.log('componentWillMount app');
  }

  componentDidMount() {
    console.log('componentDidMount app');
  }

  render() {
    console.log('render app');
    return (
      <div>
        <Timer time={ this.state.time } />
        <button onClick={() => this.setState({ time: this.state.time + 10 })}>Change Props</button>
      </div>
    )
  }
}

export default App;