'use strict';

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
      showContent: false
    }
  }
  render() {
    return (
      <div>
        <label>
          <input 
            type="checkbox"
            checked={ this.state.checked }
            onChange={ () => {
              this.setState({
                checked: !this.state.checked
              }, () => {
                this.setState({
                  showContent: this.state.checked
                })
              })
            } } />
          Mostrar mais
        </label>

        { this.state.showContent && <div>Conteúdo oculto - Aprendendo que setState é async.</div> }
      </div>
    )
  }
}

export default App;