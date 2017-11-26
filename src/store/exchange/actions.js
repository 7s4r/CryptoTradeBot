export const EXCHANGE_PRICE_READ_REQUEST = 'EXCHANGE_PRICE_READ_REQUEST'
export const EXCHANGE_PRICE_READ_SUCCESS = 'EXCHANGE_PRICE_READ_SUCCESS'
export const EXCHANGE_PRICE_READ_FAILURE = 'EXCHANGE_PRICE_READ_FAILURE'

export const exchangePriceReadRequest = (exchange, needle) => ({
  type: EXCHANGE_PRICE_READ_REQUEST,
  payload: { needle },
  meta: {
    exchange,
    thunk: `${exchange}PriceRead`,
  },
})

export const exchangePriceReadSuccess = (exchange, price, request, thunk) => ({
  type: EXCHANGE_PRICE_READ_SUCCESS,
  payload: price,
  meta: {
    request,
    thunk,
    exchange,
  },
})

export const exchangePriceReadFailure = (exchange, error, request, thunk) => ({
  type: EXCHANGE_PRICE_READ_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
    thunk,
    exchange,
  },
})

export function send(chatId, content) {
  const message = { chatId, content }
  return {
    type: 'socket',
    types: [SEND, SEND_SUCCESS, SEND_FAIL],
    promise: socket => socket.emit('SendMessage', message),
  }
}
