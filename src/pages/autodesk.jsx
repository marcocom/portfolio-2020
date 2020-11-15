import { projects } from '@src/data'
import { Project } from '@src/modules/project'
import { Layout } from '@src/ui/layout'
import React from 'react'

const { autodesk } = projects;

const PageContent = () => (
  <Layout pageTitle={autodesk.title}>
    <Project project={autodesk} />
  </Layout>
);
export default PageContent;

