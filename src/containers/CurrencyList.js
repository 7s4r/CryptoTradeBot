import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromEntities, fromResource } from '../store/selectors'
import { resourceListReadRequest } from '../store/actions'

import CurrencyList from '../components/CurrencyList'

class CurrencyListContainer extends Component {
  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.array).isRequired,
    loading: PropTypes.bool,
    failed: PropTypes.bool,
    request: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.request()
  }

  render() {
    const { list, loading, failed } = this.props
    console.log('list = ', list)
    return <CurrencyList {...{ list, loading, failed }} />
  }
}

const mapStateToProps = state => ({
  list: fromEntities.getList(state, 'markets', fromResource.getList(state, 'markets')),
})

const mapDispatchToProps = (dispatch, { symbols }) => ({
  request: () => dispatch(resourceListReadRequest('markets', { symbols })),
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyListContainer)
