'use strict'

import React, { PropTypes } from 'react'

const MarkdowEditor = ({ value, handleChange }) => (
  <div className='editor'>
    <textarea value={value} onChange={handleChange} />
    <div className='view'>{value}</div>
  </div>
)

MarkdowEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default MarkdowEditor
