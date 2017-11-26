const merge = require('lodash/merge')

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    isDev: process.env.NODE_ENV !== 'production',
    basename: process.env.PUBLIC_PATH,
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
    isBrowser: typeof window !== 'undefined',
    isServer: typeof window === 'undefined',
    apiUrl: 'https://jsonplaceholder.typicode.com',
    auth: {
      domain: '7s4r.eu.auth0.com',
      clientId: '9Bo8aOlKhv5IZg7Ju0VC6NLx11EqTCCP',
      clientSecret: '1C5emmwPYnLvfYwyZxRtldN2IBsQw6jjKMFZlL4qS1Rdi_QzQ82sgAA-mrsKMU_6',
    },
    graphcool: {
      endpoint: 'https://api.graph.cool/simple/v1/cjaf6ex243c6r0140g76s3o6n',
    },
  },
  test: {},
  development: {},
  production: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 8080,
    apiUrl: 'https://jsonplaceholder.typicode.com',
  },
}

module.exports = merge(config.all, config[config.all.env])
