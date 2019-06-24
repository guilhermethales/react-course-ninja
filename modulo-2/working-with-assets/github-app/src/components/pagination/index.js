'use scrict'

import React from 'react'
import pagination from '../../utils/pagination/index'

const Pagination = ({total, activePage}) => (
  <div>
    <ul>
      {pagination({total, activePage}).map((item, i) => (
        <li key={i}>
          <a>{item}</a>
        </li>
      ))}
    </ul>
  </div>
)

export default Pagination
