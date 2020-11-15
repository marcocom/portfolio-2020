import { projects } from '@src/data'
import { Project } from '@src/modules/project'
import { Layout } from '@src/ui/layout'
import React from 'react'

const {marriott } = projects;

const PageContent = () => (
  <Layout pageTitle={marriott.title}>
    <Project project={marriott} />
  </Layout>
);
export default PageContent;

