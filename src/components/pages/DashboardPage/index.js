import React from 'react'

import PageTemplate from '../../templates/PageTemplate'
import CurrencyList from '../../CurrencyList'

const DashboardPage = () => (
  <PageTemplate>
    <CurrencyList
      symbols={[
        'ETHUSD',
        'BTCUSD',
        'LTCUSD',
        'IOTAUSD',
      ]}
    />
  </PageTemplate>
)

export default DashboardPage
