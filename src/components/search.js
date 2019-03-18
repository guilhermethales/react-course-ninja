'use strict';

import React, { Component, PropTypes } from 'react';

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
  getUser: PropTypes.func.isRequired
}

export default Search;