import React from 'react'
import PropTypes from 'prop-types'

import Currency from '../Currency'

const CurrencyList = ({
  list, loading, failed, ...props
}) => (
  <div {...props}>
    {!list.length && loading && <div>Loading</div>}
    {failed && <div>Something went wrong while fetching currencies. Please, try again later.</div>}
    {list.map(currency => <Currency key={currency} {...currency} />)}
  </div>
)

CurrencyList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.array).isRequired,
  loading: PropTypes.bool,
  failed: PropTypes.bool,
}

export default CurrencyList
