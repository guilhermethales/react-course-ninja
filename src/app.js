'use strict';

import React, { Component } from 'react';
import Title from './title';
import Square from './square';

class App extends Component {
  render() {
    return (
      <div>
        {
          ['blue', 'red', 'green', 'gray', 'tomato'].map((color) => (
            <Square key={color} color={color} />
          ))
        }
        
      </div>
    )
  }
}

export default App;