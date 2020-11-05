import React from 'react'

import { Layout } from '@src/ui/layout'
import { WorkHero } from '@src/modules/work'

const Home = () => (
  <Layout pageTitle='Welcome'>
    <WorkHero />
  </Layout>
);

export default Home
