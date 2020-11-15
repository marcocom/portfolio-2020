import { projects } from '@src/data'
import { Project } from '@src/modules/project'
import { Layout } from '@src/ui/layout'
import React from 'react'

const { sixtymin } = projects;

const PageContent = () => (
  <Layout pageTitle={sixtymin.title} >
    <Project project={sixtymin} />
  </Layout>
);
export default PageContent;

