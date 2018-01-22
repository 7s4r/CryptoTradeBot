import React from 'react'
import PropTypes from 'prop-types'

import MenuAppBar from '../../MenuAppBar'
import './styles.css'

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
