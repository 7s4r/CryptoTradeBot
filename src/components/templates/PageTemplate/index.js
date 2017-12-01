import React from 'react'
import PropTypes from 'prop-types'

import MenuAppBar from '../../MenuAppBar'

const PageTemplate = ({ children }) => (
  <div>
    <MenuAppBar />
    {children}
  </div>
)

PageTemplate.propTypes = {
  children: PropTypes.any.isRequired,
}

export default PageTemplate
