import React from 'react'
import PropTypes from 'prop-types'

const Currency = (data) => {
  return (
    <p>{data}</p>
  )
}

Currency.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Currency
