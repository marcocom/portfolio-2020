import { projects, projectTech } from '@src/data'
import { Project } from '@src/modules/project'
import { Layout } from '@src/ui/layout'
import React from 'react'

const {tombrady} = projects;

const PageContent = () => (
  <Layout pageTitle={tombrady.title}>
    <Project project={tombrady} />
  </Layout>
);
export default PageContent;

