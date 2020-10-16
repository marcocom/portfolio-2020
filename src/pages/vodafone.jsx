import { projects, projectTech } from '@src/data'
import { Project } from '@src/modules/project'
import { Layout } from '@src/ui/layout'
import React from 'react'

const {vodafone} = projects;

const PageContent = () => (
  <Layout pageTitle={vodafone.title}>
    <Project project={vodafone} />
  </Layout>
);
export default PageContent;

