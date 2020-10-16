import { projects, projectTech } from '@src/data'
import { Project } from '@src/modules/project'
import { Layout } from '@src/ui/layout'
import React from 'react'

const { dockers } = projects;

const PageContent = () => (
  <Layout pageTitle={dockers.title}>
    <Project project={dockers} />
  </Layout>
);
export default PageContent;

