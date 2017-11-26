import React from 'react'

import { PageTemplate, Header, Footer } from 'components'
import { Price } from 'containers'

const DashboardPage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Price />
    </PageTemplate>
  )
}

export default DashboardPage
