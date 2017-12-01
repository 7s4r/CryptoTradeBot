import React from 'react'

import { PageTemplate } from 'components'
import { CurrencyList } from 'containers'

const DashboardPage = () => {
  return (
    <PageTemplate>
      <CurrencyList />
    </PageTemplate>
  )
}

export default DashboardPage
