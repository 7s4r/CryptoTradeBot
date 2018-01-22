import React from 'react'
import PropTypes from 'prop-types'

import PageTemplate from '../../templates/PageTemplate'
import Currency from '../../Currency'

const CurrencyPage = ({ name }) => (
  <PageTemplate>
    <Currency name={name} />
  </PageTemplate>
)

CurrencyPage.propTypes = {
  name: PropTypes.string.isRequired,
}

export default CurrencyPage
