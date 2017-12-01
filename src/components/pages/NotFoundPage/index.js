import React from 'react'
import PropTypes from 'prop-types'

import PageTemplate from '../../templates/PageTemplate'

const NotFoundPage = ({ staticContext }) => {
  if (staticContext) {
    // eslint-disable-next-line no-param-reassign
    staticContext.status = 404
  }

  return (
    <PageTemplate>
      <h1>404 Not Found</h1>
    </PageTemplate>
  )
}

NotFoundPage.propTypes = {
  staticContext: PropTypes.object,
}

export default NotFoundPage
