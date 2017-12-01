import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchState } from 'react-router-server'
import { isPending, hasFailed } from 'redux-saga-thunk'
import { fromEntities, fromResource } from 'store/selectors'
import { resourceListReadRequest } from 'store/actions'
import { isBrowser, isServer, bitfinex } from 'config'

import { CurrencyList } from 'components'

class CurrencyListContainer extends Component {
  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.array).isRequired,
    loading: PropTypes.bool,
    failed: PropTypes.bool,
    readList: PropTypes.func.isRequired,
    hasServerState: PropTypes.bool,
    setServerState: PropTypes.func.isRequired,
    cleanServerState: PropTypes.func.isRequired,
  }

  componentWillMount() {
    const {
      readList, hasServerState, setServerState, cleanServerState,
    } = this.props

    if (!hasServerState) {
      if (isServer) {
        readList().then(setServerState, setServerState)
      } else {
        readList()
      }
    } else if (isBrowser) {
      cleanServerState()
    }
  }

  render() {
    const { list, loading, failed } = this.props
    console.log('list = ', list)
    return <CurrencyList {...{ list, loading, failed }} />
  }
}

const mapStateToProps = state => ({
  list: fromEntities.getList(state, 'tickers', fromResource.getList(state, 'tickers')),
  loading: isPending(state, 'tickersListRead'),
  failed: hasFailed(state, 'tickersListRead'),
})

const mapDispatchToProps = dispatch => ({
  readList: () => dispatch(resourceListReadRequest('tickers', { symbols: bitfinex.symbols })),
})

const withServerState = fetchState(
  state => ({
    hasServerState: !!state.data,
  }),
  actions => ({
    setServerState: data => actions.done({ data }),
    cleanServerState: () => actions.done(),
  })
)

export default withServerState(connect(mapStateToProps, mapDispatchToProps)(CurrencyListContainer))
