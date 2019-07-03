'use strict'

import React, {Component} from 'react'
import AppContent from './components/app-content'
import ajax from '@fdaciuk/ajax'

const initialReposState = {
  repos: [],
  pagination: {
    total: 1,
    activePage: 1
  }
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userinfo: null,
      repos: initialReposState,
      starred: initialReposState,
      isFetching: false
    }

    this.perPage = 3
  }

  getGithubApiUrl(username, type, page = 1) {
    const internalUser = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users${internalUser}${internalType}?per_page=${this.perPage}&page=${page}`
  }

  getUser = (e) => {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13
    const target = e.target
    if (keyCode === ENTER) {
      this.setState({isFetching: true})
      ajax().get(this.getGithubApiUrl(value))
      .then((data) => {
        this.setState({
          userinfo: {
            photo: data.avatar_url,
            login: data.login,
            username: data.name || '',
            repos: data.public_repos,
            followers: data.followers,
            following: data.following,
          },
          repos: initialReposState,
          starred: initialReposState,
        })
      })
      .always(() => {
        this.setState({isFetching: false})
      })
    }
  }

  getRepos(type, page) {
    return () => {
      const username = this.state.userinfo.login
      ajax().get(this.getGithubApiUrl(username, type, page))
      .then((data, xhr) => {
        const linkHeader = xhr.getResponseHeader('Link') || ''
        const totalPagesMatch = linkHeader.match(/&page=(\d+)>; rel="last"/)
        this.setState({
          [type]: {
            repos: data.map(repo => ({
              id: repo.id,
              name: repo.name,
              link: repo.html_url,
              })
            ),
            pagination: {
              total: totalPagesMatch ? +totalPagesMatch[1] : this.state[type].pagination.total,
              activePage: page
            }
          }
        })
      })
    }
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

export default App