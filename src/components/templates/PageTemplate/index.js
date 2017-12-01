import React from 'react'
import PropTypes from 'prop-types'

import { AppBar, SimpleTooltips } from 'components'

const PageTemplate = ({ children }) => {
  return (
    <div>
      <AppBar />
      {children}
      <SimpleTooltips />
    </div>
  )
}

PageTemplate.propTypes = {
  children: PropTypes.any.isRequired,
}

export default PageTemplate
