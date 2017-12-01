import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Helmet from 'react-helmet'

import { HomePage, DashboardPage, NotFoundPage } from 'components'
import { GoogleTagManager } from 'containers'

const App = () => {
  return (
    <div>
      <Helmet titleTemplate="CryptoTradeBot - %s">
        <title>CryptoTradeBot</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:site_name" content="CryptoTradeBot" />
        <meta property="og:image" content="thumbnail.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="icon" href="icon.png" />
      </Helmet>
      <GoogleTagManager />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/dashboard" component={DashboardPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  )
}

export default App
