import { projects } from '@src/data'
import { Project } from '@src/modules/project'
import { Layout } from '@src/ui/layout'
import React from 'react'

const {raadnwin} = projects;

const PageContent = () => (
  <Layout pageTitle={raadnwin.title}>
    <Project project={raadnwin} />
  </Layout>
);
export default PageContent;

