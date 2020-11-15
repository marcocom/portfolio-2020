import { projects } from '@src/data'
import { Project } from '@src/modules/project'
import { Layout } from '@src/ui/layout'
import React from 'react'

const {dodgemotorsports} = projects;

const PageContent = () => (
  <Layout pageTitle={dodgemotorsports.title}>
    <Project project={dodgemotorsports} />
  </Layout>
);
export default PageContent;

