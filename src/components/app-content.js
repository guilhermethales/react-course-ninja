'use strict';

import React, { PropTypes } from 'react';
import Search from './search';
import UserInfo from './user-info';
import Actions from './actions';
import Repos from './repos';

const AppContent = ({ 
  userinfo, 
  repos, 
  starred, 
  getUser, 
  getRepos, 
  getStarred, 
  showRepos, 
  showStarred }) => (
  <div className="app">
    <Search getUser={ getUser } />
    { !!userinfo && <UserInfo userinfo={userinfo} /> }
    { !!userinfo && <Actions getRepos={ getRepos } getStarred={ getStarred } /> }
    
    { !!repos.length &&
      <Repos 
        className="repos" 
        title="Repositórios" 
        repos={ repos } 
      />
    }
    { !!starred.length &&
      <Repos 
        className="starred" 
        title="Favoritos" 
        repos={ starred } />
    }
  </div>
)

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
}

export default AppContent;