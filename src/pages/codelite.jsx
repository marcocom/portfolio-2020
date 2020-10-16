import { projects, projectTech } from '@src/data'
import { Project } from '@src/modules/project'
import { Layout } from '@src/ui/layout'
import React from 'react'

const {codelite } = projects;

const PageContent = () => (
  <Layout pageTitle={codelite.title}>
    <Project project={codelite} />
  </Layout>
);
export default PageContent;

