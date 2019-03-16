'use strict';

import React, { Component } from 'react';
import AppContent from './components/app-content';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userinfo: {
        username: 'Guilherme Thales',
        photo: 'https://avatars2.githubusercontent.com/u/15384483?v=4',
        login: 'guilhermethales',
        repos: 40,
        followers: 6,
        following: 14,
      },
      repos: [
        { name: 'comdominio', link: 'https://github.com/guilhermethales/comdominio' },
        { name: 'curso-reactjs-ninja', link: 'https://github.com/guilhermethales/curso-reactjs-ninja' }
      ],
      starred: [
        { link: 'https://github.com/orgs/smart-campus-newton/teams/smart-campus-team', name: 'smart-campus-team' },
        { link: 'https://github.com/RafaelAugustoS/Clone-Uber-EATS', name: 'Clone-Uber-EATS' },
      ],
    }
  }

  render() {
    return <AppContent 
      userinfo={ this.state.userinfo }
      repos={ this.state.repos }
      starred={ this.state.starred }
    />
  }
}

export default App;