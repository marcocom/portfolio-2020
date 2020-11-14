import { projects } from '@src/data'
import { Project } from '@src/modules/project'
import { Layout } from '@src/ui/layout'
import React from 'react'

const {eggbank } = projects;

const PageContent = () => (
  <Layout pageTitle={eggbank.title}>
    <Project project={eggbank} />
  </Layout>
);
export default PageContent;

