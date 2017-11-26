import { put, call, takeEvery } from 'redux-saga/effects'
import * as actions from './actions'

export function* readExchangePrice(socket, { needle }, { exchange, thunk }) {
  try {
    const price = yield call([socket, socket.get], `/${exchange}/${needle}`)
    yield put(actions.exchangePriceReadSuccess(exchange, price, { needle }, thunk))
  } catch (e) {
    yield put(actions.exchangePriceReadFailure(exchange, e, { needle }, thunk))
  }
}

export function* watchExchangePriceReadRequest(socket, { payload, meta }) {
  yield call(readExchangePrice, socket, payload, meta)
}

export default function* ({ socket }) {
  yield takeEvery(actions.EXCHANGE_PRICE_READ_REQUEST, watchExchangePriceReadRequest, socket)
}
