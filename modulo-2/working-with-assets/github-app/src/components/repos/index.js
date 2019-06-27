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
      <Pagination total={10} activePage={repos.pagination.activePage} onClick={handlePagination} />
    </div>
  </div>
)

Repos.defaultProps = {
  className: ''
}

Repos.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  handlePagination: PropTypes.func.isRequired,
  repos: PropTypes.shape({
    repos: PropTypes.arrayOf(PropTypes.shape({
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })).isRequired,
    pagination: PropTypes.shape({
      total: PropTypes.number,
      activePage: PropTypes.number
    }).isRequired
  })
}

export default Repos
