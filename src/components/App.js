import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'

import { HomePage, DashboardPage, NotFoundPage } from 'components'
import { GoogleTagManager } from 'containers'

import theme from './themes/default'

injectGlobal`
  body {
    margin: 0;
  }
`

const App = () => {
  return (
    <div>
      <Helmet titleTemplate="CryptoTradeBot - %s">
        <title>Atomic React</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:site_name" content="CryptoTradeBot" />
        <meta property="og:image" content="https://cryptoTradeBot.io/thumbnail.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="icon" href="icon.png" />
      </Helmet>
      <GoogleTagManager />
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/dashboard" component={DashboardPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </ThemeProvider>
    </div>
  )
}

export default App
