'use strict';

import React, { Component } from 'react';
import Button from './button';
import Square from './square';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      color: 'green'
    }
  }

  setColorSquare = (color) => {
    this.setState({
      color: color
    })
  }

  render() {
    return (
      <div>
        <Square color={ this.state.color }/>

        { ['red', 'blue', 'green'].map((color) => (
          <Button key={ color } handleClick={ () => this.setColorSquare(color) }>{ color }</Button>
        )) }
      </div>
    )
  }
}

export default App;