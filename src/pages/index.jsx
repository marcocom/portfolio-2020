import React from 'react'

import { Layout } from '@src/ui/layout'
import { Welcome } from '@src/modules/welcome'

const Home = () => (
  <Layout pageTitle='Welcome'>
    <Welcome />
  </Layout>
);

export default Home
