// https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities
import { schema } from 'normalizr'

export const posts = new schema.Entity('posts')

export const bid = new schema.Entity('bid')
export const bidPeriod = new schema.Entity('bidPeriod')
export const bidSize = new schema.Entity('bidSize')
export const ask = new schema.Entity('ask')
export const askPeriod = new schema.Entity('baskPeriod')
export const askSize = new schema.Entity('askSize')

export const tickers = new schema.Array({
  bid,
  bidPeriod,
  bidSize,
}, (input) => {
  console.log('input = ', input)
  return input
})
