'use strict';

import React, { PropTypes } from 'react'

const UserInfo = ({ userinfo }) => (
  <div>
    <div className="user-info">
      <img src={ userinfo.photo } alt=""/>
      <h1 className="username">
        <a href={`https://github.com/${userinfo.login}`}>
          { userinfo.username }
        </a>
      </h1>

      <ul className="repos-info">
        <li>- Repositórios: { userinfo.repos }</li>
        <li>- Seguidores: { userinfo.followers }</li>
        <li>- Seguindo: { userinfo.following }</li>
      </ul>
    </div>
  </div>
)

UserInfo.propTypes = {
  userinfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
  })
}

export default UserInfo;