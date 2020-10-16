import { projects, projectTech } from '@src/data'
import { Project } from '@src/modules/project'
import { Layout } from '@src/ui/layout'
import React from 'react'

const {ritepro} = projects;

const PageContent = () => (
  <Layout pageTitle={ritepro.title}>
    <Project project={ritepro} />
  </Layout>
);
export default PageContent;

