'use scrict'

import React, {PropTypes} from 'react'
import pagination from 'utils/pagination/index'
import Page from './page'
import './pagination.css'

const Pagination = ({total, activePage, pageLink, onClick}) => (
  <div>
    <ul className='pagination'>
      {pagination({total, activePage}).map((page, i) => (
        <li key={i} className={`pagination-item ${activePage === page ? 'active' : ''}`}>
          <Page page={page} pageLink={pageLink.replace('%page%', page)} onClick={onClick} />
        </li>
      ))}
    </ul>
  </div>
)

Pagination.defaultProps = {
  activePage: 1,
  pageLink: ''
}

Pagination.propTypes = {
  total: PropTypes.number,
  activePage: PropTypes.number,
  pageLink: PropTypes.string,
  onClick: PropTypes.func
}

export default Pagination
