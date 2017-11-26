import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromExchange } from 'store/selectors'
import { exchangePriceReadRequest } from 'store/actions'

import { Price } from 'components'

class PriceContainer extends Component {
  static propTypes = {
    request: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.request()
  }

  render() {
    return <Price {...this.props} />
  }
}

const mapStateToProps = state => ({
  user: fromExchange.getPrice(state),
})

const mapDispatchToProps = dispatch => ({
  request: () => dispatch(exchangePriceReadRequest('bitfinex', { pair: 'BTCUSD' })),
})

export default connect(mapStateToProps, mapDispatchToProps)(PriceContainer)
