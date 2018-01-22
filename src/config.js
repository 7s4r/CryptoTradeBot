const merge = require('lodash/merge')

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    isDev: process.env.NODE_ENV !== 'production',
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
    isBrowser: typeof window !== 'undefined',
    isServer: typeof window === 'undefined',
    fbAppId: '',
    gtmId: 'GTM-PGWWBDS',
    exchanges: {
      bitfinex: {
        apiUrl: 'https://api.bitfinex.com/v2/',
      },
      bittrex: {
        apiUrl: 'https://bittrex.com/api/v1.1/public/',
      },
    },
  },
  test: {},
  development: {},
  production: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 8080,
  },
}

module.exports = merge(config.all, config[config.all.env])
