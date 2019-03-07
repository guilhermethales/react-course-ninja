'use strict';

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Guilherme'
    }
  }

  setName = () => {
    this.setState({
      text: 'Xobi'
    });
  }

  render() {
    return (
      <div className="container" onClick={ this.setName }>
        { this.state.text }
      </div>
    )
  }
}

export default App;