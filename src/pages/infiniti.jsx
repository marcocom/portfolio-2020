import { projects, projectTech } from '@src/data'
import { Project } from '@src/modules/project'
import { Layout } from '@src/ui/layout'
import React from 'react'

const {infiniti } = projects;

const PageContent = () => (
  <Layout pageTitle={infiniti.title}>
    <Project project={infiniti} />
  </Layout>
);
export default PageContent;

