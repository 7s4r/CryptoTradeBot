import get from 'lodash/get'
import { initialState, getExchangeState, getPrice } from './selectors'
import {
  EXCHANGE_PRICE_READ_REQUEST,
  EXCHANGE_PRICE_READ_SUCCESS,
} from './actions'

export default (state = initialState, { type, payload, meta }) => {
  const exchange = get(meta, 'exchange')

  if (!exchange) {
    return state
  }

  switch (type) {
    case EXCHANGE_PRICE_READ_REQUEST:
      return {
        ...state,
        [exchange]: {
          ...getExchangeState(state, exchange),
          price: getPrice(initialState, exchange),
        },
      }
    case EXCHANGE_PRICE_READ_SUCCESS:
      return {
        ...state,
        [exchange]: {
          ...getExchangeState(state, exchange),
          price: payload,
        },
      }

    default:
      return state
  }
}
