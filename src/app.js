'use strict';

import React, { Component } from 'react';
import Search from './components/search';
import UserInfo from './components/user-info';
import Actions from './components/actions';
import Repos from './components/repos';

const App = () => (
  <div className="app">
    <Search />
    <UserInfo />
    <Actions />
    <Repos 
      className="repos" 
      title="Repositórios" 
      repos={[
        { name: 'comdominio', link: 'https://github.com/guilhermethales/comdominio' },
        { name: 'curso-reactjs-ninja', link: 'https://github.com/guilhermethales/curso-reactjs-ninja' }
      ]} />
    <Repos 
      className="starred" 
      title="Favoritos" 
      repos={[
        { link: 'https://github.com/orgs/smart-campus-newton/teams/smart-campus-team', name: 'smart-campus-team' },
        { link: 'https://github.com/RafaelAugustoS/Clone-Uber-EATS', name: 'Clone-Uber-EATS' },
      ]} />
  </div>
)

export default App;