import { projects } from '@src/data'
import { Project } from '@src/modules/project'
import { Layout } from '@src/ui/layout'
import React from 'react'

const {kpn} = projects;

const PageContent = () => (
  <Layout pageTitle={kpn.title}>
    <Project project={kpn} />
  </Layout>
);
export default PageContent;

