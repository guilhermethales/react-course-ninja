'use strict'

import React, { PropTypes } from 'react'
import './actions.css'

const Actions = ({ getRepos, getStarred }) => (
  <div>
    <div className='actions'>
      <button onClick={getRepos}>Ver repositórios</button>
      <button onClick={getStarred}>Ver favoritos</button>
    </div>
  </div>
)

Actions.propTypes = {
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
}

export default Actions
