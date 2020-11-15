import { projects } from '@src/data'
import { Project } from '@src/modules/project'
import { Layout } from '@src/ui/layout'
import React from 'react'

const {stadia} = projects;

const PageContent = () => (
  <Layout pageTitle={stadia.title}>
    <Project project={stadia} />
  </Layout>
);
export default PageContent;

