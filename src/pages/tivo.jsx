import { projects } from '@src/data'
import { Project } from '@src/modules/project'
import { Layout } from '@src/ui/layout'
import React from 'react'

const {tivo} = projects;

const PageContent = () => (
  <Layout pageTitle={tivo.title}>
    <Project project={tivo} />
  </Layout>
);
export default PageContent;

