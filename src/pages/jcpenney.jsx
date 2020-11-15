import { projects } from '@src/data'
import { Project } from '@src/modules/project'
import { Layout } from '@src/ui/layout'
import React from 'react'

const {jcpenney } = projects;

const PageContent = () => (
  <Layout pageTitle={jcpenney.title}>
    <Project project={jcpenney} />
  </Layout>
);
export default PageContent;

