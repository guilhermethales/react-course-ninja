'use strict';

import React, { PropTypes } from 'react'

const Repos = ({ className, title, repos }) => (
  <div>
    <div className={ className }>
      <h2>{ title }</h2>
      <ul>
        { repos.map((repo, index) => (
          <li key={repo.id} ><a target="_blank" href={ repo.link }>{ repo.name }</a></li>
        )) }
      </ul>
    </div>
  </div>
)

Repos.defaultProps = {
  className: '',
}

Repos.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.array,
}

export default Repos;