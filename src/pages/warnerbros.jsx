import { projects, projectTech } from '@src/data'
import { Project } from '@src/modules/project'
import { Layout } from '@src/ui/layout'
import React from 'react'

const {warnerbros} = projects;

const PageContent = () => (
  <Layout pageTitle={warnerbros.title}>
    <Project project={warnerbros} />
  </Layout>
);
export default PageContent;

