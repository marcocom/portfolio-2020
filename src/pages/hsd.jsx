import { projects } from '@src/data'
import { Project } from '@src/modules/project'
import { Layout } from '@src/ui/layout'
import React from 'react'

const {hsd } = projects;

const PageContent = () => (
  <Layout pageTitle={hsd.title}>
    <Project project={hsd} />
  </Layout>
);
export default PageContent;

