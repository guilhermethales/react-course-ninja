'use strict';

import React, { Component } from 'react';
import Button from './button';

class App extends Component {
  render() {
    return (
      <div>
        <Button handleClick={() => console.log('clicou')}>Clique em mim</Button>
      </div>
    )
  }
}

export default App;