'use strict';

import React from 'react';

const Title = ({ name }) => {
  return (
    <div>
      <h1>Olá { `${name.firstname} ${name.lastname}` }</h1>
    </div>
  )
};

Title.defaultProps = {
  name: {
    firstname: 'Nome Desconhecido',
    lastname: 'Sobrenome Desconhecido'
  }
}

export default Title;