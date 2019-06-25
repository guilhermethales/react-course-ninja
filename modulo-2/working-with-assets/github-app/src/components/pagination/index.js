'use scrict'

import React from 'react'
import pagination from 'utils/pagination/index'
import Page from './page'

const Pagination = ({total, activePage, pageLink}) => (
  <div>
    <ul>
      {pagination({total, activePage}).map((page, i) => (
        <li key={i}>
          <Page page={page} pageLink={pageLink.replace('%page%', page)} />
        </li>
      ))}
    </ul>
  </div>
)

export default Pagination
