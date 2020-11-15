import { projects } from '@src/data'
import { Project } from '@src/modules/project'
import { Layout } from '@src/ui/layout'
import React from 'react'

const {shift2} = projects;

const PageContent = () => (
  <Layout pageTitle={shift2.title}>
    <Project project={shift2} />
  </Layout>
);
export default PageContent;

