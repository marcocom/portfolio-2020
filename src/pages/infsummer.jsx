import { projects } from '@src/data'
import { Project } from '@src/modules/project'
import { Layout } from '@src/ui/layout'
import React from 'react'

const {infsummer} = projects;

const PageContent = () => (
  <Layout pageTitle={infsummer.title}>
    <Project project={infsummer} />
  </Layout>
);
export default PageContent;

