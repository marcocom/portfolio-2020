import { projects } from '@src/data'
import { Project } from '@src/modules/project'
import { Layout } from '@src/ui/layout'
import React from 'react'

const {yoroto} = projects;

const PageContent = () => (
  <Layout pageTitle={yoroto.title}>
    <Project project={yoroto} />
  </Layout>
);
export default PageContent;

