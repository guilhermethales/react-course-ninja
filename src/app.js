'use strict';

import React from 'react';
import Title from './title';

const App = () => {
  return (
    <div>
      <Title name={ { firstname: 'Guilherme Thales', lastname: 'Virgílio' } }/>
    </div>
  )
}

export default App;