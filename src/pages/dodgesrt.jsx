import { projects } from '@src/data'
import { Project } from '@src/modules/project'
import { Layout } from '@src/ui/layout'
import React from 'react'

const { dodgesrt } = projects;

const PageContent = () => (
  <Layout pageTitle={dodgesrt.title}>
    <Project project={dodgesrt} />
  </Layout>
);
export default PageContent;

