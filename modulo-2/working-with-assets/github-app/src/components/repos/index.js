'use strict'

import React, {PropTypes} from 'react'
import Pagination from 'components/pagination'
import './repos.css'

const Repos = ({className, title, repos, handlePagination}) => (
  <div>
    <div className={`repos-list ${className}`}>
      <h2>{title}</h2>
      <ul>
        {repos.repos.map((repo, index) => (
          <li key={repo.id} ><a target='_blank' href={repo.link}>{repo.name}</a></li>
        ))}
      </ul>
      <Pagination total={10} activePage={1} onClick={handlePagination} />
    </div>
  </div>
)

Repos.defaultProps = {
  className: '',
  repos: {}
}

Repos.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  handlePagination: PropTypes.func.isRequired,
  repos: PropTypes.object
}

export default Repos
