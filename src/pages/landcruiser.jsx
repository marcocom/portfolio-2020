import { projects } from '@src/data'
import { Project } from '@src/modules/project'
import { Layout } from '@src/ui/layout'
import React from 'react'

const {landcruiser } = projects;

const PageContent = () => (
  <Layout pageTitle={landcruiser.title}>
    <Project project={landcruiser} />
  </Layout>
);
export default PageContent;

