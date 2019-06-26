'use strict';

import React, {Component} from 'react'
import AppContent from './components/app-content'
import ajax from '@fdaciuk/ajax'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      isFetching: false
    }
  }

  getGithubApiUrl(username, type, page = 1) {
    console.log('chegou')
    const internalType = type ? `/${type}` : '';
    return `https://api.github.com/users/${username}${internalType}?per_page=${page}`;
  }

  getUser = (e) => {
    const value = e.target.value;
    const keyCode = e.which || e.keyCode;
    const ENTER = 13;
    const target = e.target;
    if (keyCode === ENTER) {
      this.setState({isFetching: true});
      ajax().get(this.getGithubApiUrl(value))
      .then((data) => {
        this.setUserInfo(data, e);
      })
      .always(() => {
        this.setState({isFetching: false});
      });
    }
  }

  getRepos(type, page) {
    return () => {
      const username = this.state.userinfo.login;
      ajax().get(this.getGithubApiUrl(username, type, page))
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

  setUserInfo = (data, e) => {
    this.setState({
      userinfo: {
        photo: data.avatar_url,
        login: data.login,
        username: data.name || '',
        repos: data.public_repos,
        followers: data.followers,
        following: data.following,
      },
    })
  }

  render() {
    return <AppContent 
      {...this.state}
      getUser = {this.getUser}
      getRepos = {this.getRepos('repos')}
      getStarred = {this.getRepos('starred')}
      handlePagination = {(type, page) => this.getRepos(type, page)()}
    />
  }
}

export default App;