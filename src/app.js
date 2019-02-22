'use strict';

import React from 'react';
import Title from './title';

class App extends React.Component {
  render() {
    return (
      <div>
        <Title name={ { firstname: 'Guilherme Thales', lastname: 'Virgílio' } }/>
      </div>
    )
  }
}

export default App;