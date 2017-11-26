export const initialState = {}

export const initialExchangeState = {
  price: null,
}

export const getExchangeState = (state = initialState, exchange) =>
  state[exchange] || initialExchangeState

export const getPrice = (state = initialState, exchange) =>
  getExchangeState(state, exchange).price
