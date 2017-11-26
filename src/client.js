/* eslint-disable no-underscore-dangle */
import 'react-hot-loader/patch'
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ServerStateProvider } from 'react-router-server'

import { basename } from 'config'
import configureStore from 'store/configure'
import api from 'services/api'
import SocketClient from 'services/socket'
import App from 'components/App'

const serverState = window.__SERVER_STATE__
const initialState = window.__INITIAL_STATE__
const socketClient = new SocketClient()
const store = configureStore(initialState, { api: api.create(), socket: socketClient })

const renderApp = () => (
  <ServerStateProvider state={serverState}>
    <Provider store={store}>
      <BrowserRouter basename={basename}>
        <App />
      </BrowserRouter>
    </Provider>
  </ServerStateProvider>
)

const root = document.getElementById('app')
render(renderApp(), root)

if (module.hot) {
  module.hot.accept('components/App', () => {
    require('components/App')
    render(renderApp(), root)
  })
}
