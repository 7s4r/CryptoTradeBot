import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import DashboardPage from './pages/DashboardPage'
import CurrencyPage from './pages/CurrencyPage'

const App = () => (
  <div>
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/currency/:name" component={CurrencyPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
)

export default App
