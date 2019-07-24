'use strict'

import React, { PropTypes } from 'react'

const MarkdowEditor = ({ value, handleChange, getMarkup }) => (
  <div className='editor'>
    <textarea value={value} onChange={handleChange} autoFocus />
    <div className='view' dangerouslySetInnerHTML={getMarkup()} />
  </div>
)

MarkdowEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default MarkdowEditor
