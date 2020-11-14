import { projects } from '@src/data'
import { Project } from '@src/modules/project'
import { Layout } from '@src/ui/layout'
import React from 'react'

const {usarmy} = projects;

const PageContent = () => (
  <Layout pageTitle={usarmy.title}>
    <Project project={usarmy} />
  </Layout>
);
export default PageContent;

