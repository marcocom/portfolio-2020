import { projects } from '@src/data'
import { Project } from '@src/modules/project'
import { Layout } from '@src/ui/layout'
import React from 'react'

const {levis} = projects;

const PageContent = () => (
  <Layout pageTitle={levis.title}>
    <Project project={levis} />
  </Layout>
);
export default PageContent;

