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
        { this.state.showTimer && <Timer /> }
        <button onClick={() => this.setState({ showTimer: !this.state.showTimer })}>Show / hide timer</button>
      </div>
    )
  }
}

export default App;