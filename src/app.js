'use strict';

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'valor inicial',
    }
  }
  render() {
    return (
      <div>
        <form>
          <textarea value={ this.state.value } onChange={ (e) => {
            this.setState({
              value: e.target.value
            })
          } } cols="30" rows="10" />
        </form>
      </div>
    )
  }
}

export default App;