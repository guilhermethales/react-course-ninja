'use scrict'

import React, {PropTypes} from 'react'
import pagination from 'utils/pagination/index'
import Page from './page'

const Pagination = ({total, activePage, pageLink, onClick}) => (
  <div>
    <ul>
      {pagination({total, activePage}).map((page, i) => (
        <li key={i}>
          <Page page={page} pageLink={pageLink.replace('%page%', page)} onClick={onClick} />
        </li>
      ))}
    </ul>
  </div>
)

Pagination.defaultProps = {
  pageLink: ''
}

Pagination.propTypes = {
  total: PropTypes.number,
  activePage: PropTypes.number,
  pageLink: PropTypes.string,
  onClick: PropTypes.func
}

export default Pagination
