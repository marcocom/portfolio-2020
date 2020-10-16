import { projects, projectTech } from '@src/data'
import { Project } from '@src/modules/project'
import { Layout } from '@src/ui/layout'
import React from 'react'

const {deluxe } = projects;

const PageContent = () => (
  <Layout pageTitle={deluxe.title}>
    <Project project={deluxe} />
  </Layout>
);
export default PageContent;

