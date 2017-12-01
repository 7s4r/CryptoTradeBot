import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Currency } from 'components'

const Wrapper = styled.div`
  & > * {
    margin: 1rem;
  }
`

const CurrencyList = ({
  list, loading, failed, ...props
}) => {
  return (
    <Wrapper {...props}>
      {!list.length && loading && <div>Loading</div>}
      {failed && <div>Something went wrong while fetching posts. Please, try again later.</div>}
      {list.map(currency => <Currency key={currency} {...currency} />)}
    </Wrapper>
  )
}

CurrencyList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.array).isRequired,
  loading: PropTypes.bool,
  failed: PropTypes.bool,
}

export default CurrencyList
