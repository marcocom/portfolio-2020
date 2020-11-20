import React from 'react';

import { About } from '@src/modules/about'
import { Layout } from '@src/ui/layout'


const PageContent = () => {

  // React.useEffect(() => window.scrollTo(0, 0));
  return (
    <Layout pageTitle='About' >
      <About />
    </Layout>
  )
};

export default PageContent;
