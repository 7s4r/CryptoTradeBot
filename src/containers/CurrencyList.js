import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromEntities, fromResource } from '../store/selectors'
import { resourceListReadRequest } from '../store/actions'
import { exchanges } from '../config'

import CurrencyList from '../components/CurrencyList'

class CurrencyListContainer extends Component {
  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.array).isRequired,
    loading: PropTypes.bool,
    failed: PropTypes.bool,
    readList: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.readList()
  }

  render() {
    const { list, loading, failed } = this.props
    console.log('list = ', list)
    return <CurrencyList {...{ list, loading, failed }} />
  }
}

const mapStateToProps = state => ({
  list: fromEntities.getList(state, 'tickers', fromResource.getList(state, 'tickers')),
})

const mapDispatchToProps = dispatch => ({
  readList: () => dispatch(resourceListReadRequest('tickers', { symbols: 'tBTCUSD' })),
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyListContainer)
