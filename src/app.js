'use strict';

import React, { Component } from 'react';
import Title from './title';
import Square from './square';

class App extends Component {
  render() {
    return (
      <div className="container"  onClick={() => {
        alert('clicou');
      }}>
        <Square color={'red'} />
      </div>
    )
  }
}

export default App;