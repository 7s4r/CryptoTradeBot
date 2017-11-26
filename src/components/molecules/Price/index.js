import React from 'react'
import PropTypes from 'prop-types'

import { Paragraph } from 'components'

const Price = ({ value }) => {
  return (
    <Paragraph>{value}</Paragraph>
  )
}

Price.propTypes = {
  value: PropTypes.string.isRequired,
}

export default Price
