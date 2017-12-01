/* eslint-disable no-underscore-dangle */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import configureStore from './store/configure'
import api from './services/api'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState, { api: api.create() })

const renderApp = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

render(renderApp(), document.getElementById('root'))
registerServiceWorker()

if (module.hot) {
  module.hot.accept('./components/App', () => {
    require('./components/App')
    render(renderApp(), root)
  })
}
