'use strict';

import React from 'react';
import Search from './search';
import UserInfo from './user-info';
import Actions from './actions';
import Repos from './repos';

const AppContent = (props) => (
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

export default AppContent;