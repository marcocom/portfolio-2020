import { projects, projectTech } from '@src/data'
import { Project } from '@src/modules/project'
import { Layout } from '@src/ui/layout'
import React from 'react'

const {disney } = projects;

const PageContent = () => (
  <Layout pageTitle={disney.title}>
    <Project project={disney} />
  </Layout>
);
export default PageContent;

