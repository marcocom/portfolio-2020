import { projects, projectTech } from '@src/data'
import { Project } from '@src/modules/project'
import { Layout } from '@src/ui/layout'
import React from 'react'

const {istrategy } = projects;

const PageContent = () => (
  <Layout pageTitle={istrategy.title}>
    <Project project={istrategy} />
  </Layout>
);
export default PageContent;

