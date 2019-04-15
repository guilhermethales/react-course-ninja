'use strict';

import React, { Component, PropTypes } from 'react';
import './search.css';

const Search = ({ isDisabled, getUser }) => (
  <div>
    <div className="search">
      <input 
        type="search" 
        placeholder="Digite o nome do usuário no GitHub"
        disabled={ isDisabled }
        onKeyPress={ getUser } />
    </div>
  </div>
)

Search.propTypes = {
  getUser: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
}

export default Search;