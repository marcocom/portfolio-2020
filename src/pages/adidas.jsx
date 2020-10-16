import { projects, projectTech } from '@src/data'
import { Project } from '@src/modules/project'
import { Layout } from '@src/ui/layout'
import React from 'react'

const { adidas } = projects;

const PageContent = () => (
  <Layout pageTitle={adidas.title}>
    <Project project={adidas} />
  </Layout>
);
export default PageContent;

