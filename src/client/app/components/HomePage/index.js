import React from 'react'

import {
  PageTemplate, Header, Footer
} from 'components'

const HomePage = () => {
  return (
    <PageTemplate
      header={<Header />}
      hero={<Hero />}
      footer={<Footer />}
    >
      <FeatureList />
    </PageTemplate>
  )
}

export default HomePage
