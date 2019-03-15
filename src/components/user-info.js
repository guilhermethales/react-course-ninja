'use strict';

import React from 'react'

const UserInfo = () => (
  <div>
    <div className="user-info">
      <img src="https://avatars2.githubusercontent.com/u/15384483?v=4" alt=""/>
      <h1 className="username">
        <a href="https://github.com/guilhermethales">Guilherme Thales</a>
      </h1>

      <ul className="repos-info">
        <li>- Repositórios: 40</li>
        <li>- Seguidores: 6</li>
        <li>- Seguindo: 14</li>
      </ul>
    </div>
  </div>
)

export default UserInfo;