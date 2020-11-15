import { projects } from '@src/data'
import { Project } from '@src/modules/project'
import { Layout } from '@src/ui/layout'
import React from 'react'

const { diesel } = projects;

const PageContent = () => (
  <Layout pageTitle={diesel.title}>
    <Project project={diesel} />
  </Layout>
);
export default PageContent;

