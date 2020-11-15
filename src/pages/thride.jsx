import { projects } from '@src/data'
import { Project } from '@src/modules/project'
import { Layout } from '@src/ui/layout'
import React from 'react'

const {thride} = projects;

const PageContent = () => (
  <Layout pageTitle={thride.title}>
    <Project project={thride} />
  </Layout>
);
export default PageContent;

