'use strict';

import React, { Component } from 'react';
import AppContent from './components/app-content';
import ajax from '@fdaciuk/ajax';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      showRepos: false,
      showStarred: false,
    }
  }

  getUser = (e) => {
    const value = e.target.value;
    const keyCode = e.which || e.keyCode;
    const ENTER = 13;
    if (keyCode === ENTER) {
      ajax().get(`https://api.github.com/users/${value}`)
      .then((data) => {
        this.setUserInfo(data);
      });
    }
  }

  getRepos(type) {
    return () => {
      ajax().get(`https://api.github.com/users/${this.state.userinfo.login}/${type}`)
      .then((data) => {
        this.setState({
          [type]: data.map(repo => ({
              id: repo.id,
              name: repo.name,
              link: repo.html_url,
            })
          )
        });
      });
    }
  }

  setUserInfo = (data) => {
    this.setState({
      userinfo: {
        photo: data.avatar_url,
        login: data.login,
        username: data.name || '',
        repos: data.public_repos,
        followers: data.followers,
        following: data.following,
      }
    })
  }

  render() {
    return <AppContent 
      userinfo={ this.state.userinfo }
      repos={ this.state.repos }
      starred={ this.state.starred }
      getUser ={ this.getUser }
      getRepos ={ this.getRepos('repos') }
      getStarred ={ this.getRepos('starred') }
    />
  }
}

export default App;