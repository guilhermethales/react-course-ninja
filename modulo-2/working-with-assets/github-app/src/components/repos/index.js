'use strict'

import React, {PropTypes} from 'react'
import Pagination from 'components/pagination'
import './repos.css'

const Repos = ({className, title, repos}) => (
  <div>
    <div className={`repos-list ${className}`}>
      <h2>{title}</h2>
      <ul>
        {repos.map((repo, index) => (
          <li key={repo.id} ><a target='_blank' href={repo.link}>{repo.name}</a></li>
        ))}
      </ul>
      <Pagination total={10} activePage={3} />
    </div>
  </div>
)

Repos.defaultProps = {
  className: '',
  repos: []
}

Repos.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.array
}

export default Repos
