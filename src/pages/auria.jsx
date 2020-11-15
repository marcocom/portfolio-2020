import { projects } from '@src/data'
import { Project } from '@src/modules/project'
import { Layout } from '@src/ui/layout'
import React from 'react'

const { auria } = projects;

const PageContent = () => (
  <Layout pageTitle={auria.title}>
    <Project project={auria} />
  </Layout>
);
export default PageContent;

