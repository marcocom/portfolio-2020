import { projects } from '@src/data'
import { Project } from '@src/modules/project'
import { Layout } from '@src/ui/layout'
import React from 'react'

const {goodhome } = projects;

const PageContent = () => (
  <Layout pageTitle={goodhome.title}>
    <Project project={goodhome} />
  </Layout>
);
export default PageContent;

