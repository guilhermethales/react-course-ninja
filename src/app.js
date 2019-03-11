'use strict';

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'Valor inicial',
      checked: true
    }
  }
  render() {
    return (
      <div>
        <form>
          <input type="text" value={ this.state.value } onChange={(e) => {
            this.setState({
              value: e.target.value
            })
          }} />

          <label>
            <input type="checkbox" checked={ this.state.checked } onChange={ () => {
              this.setState({
                checked: !this.state.checked
              })
            } } />
            Checkbox
          </label>

          <label>
            <input type="radio" name="rd" value="1" /> Radio 1
            <input type="radio" name="rd" value="2" /> Radio 2
            
          </label>
        </form>
      </div>
    )
  }
}

export default App;