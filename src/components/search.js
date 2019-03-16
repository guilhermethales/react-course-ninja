'use strict';

import React, { Component, PropTypes } from 'react';

const Search = ({ getUser }) => (
  <div>
    <div className="search">
      <input 
        type="search" 
        placeholder="Digite o nome do usuário no GitHub" 
        onKeyPress={ getUser } />
    </div>
  </div>
)

Search.propTypes = {
  getUser: PropTypes.func.isRequired
}

export default Search;