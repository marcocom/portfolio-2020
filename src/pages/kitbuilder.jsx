import { projects } from '@src/data'
import { Project } from '@src/modules/project'
import { Layout } from '@src/ui/layout'
import React from 'react'

const {kitbuilder } = projects;

const PageContent = () => (
  <Layout pageTitle={kitbuilder.title}>
    <Project project={kitbuilder} />
  </Layout>
);
export default PageContent;

