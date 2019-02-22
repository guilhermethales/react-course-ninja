'use strict';

import React from 'react';

const Title = React.createClass({
  getDefaultProps: function() {
    return {
      name: {
        firstname: 'Nome Desconhecido',
        lastname: 'Sobrenome Desconhecido',
      }
    }
  },
  render: function() {
    return (
      <div>
        <h1>Olá { this.props.name.firstname + ' ' + this.props.name.lastname }</h1>
      </div>
    )
  }
});

export default Title;