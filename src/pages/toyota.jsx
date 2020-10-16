import { projects, projectTech } from '@src/data'
import { Project } from '@src/modules/project'
import { Layout } from '@src/ui/layout'
import React from 'react'

const {toyota} = projects;

const PageContent = () => (
  <Layout pageTitle={toyota.title}>
    <Project project={toyota} />
  </Layout>
);
export default PageContent;

