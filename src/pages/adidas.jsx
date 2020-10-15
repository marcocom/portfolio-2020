import { projects, projectTech } from '@src/data'
import { Project } from '@src/modules/project'
import { Layout } from '@src/ui/layout'
import React from 'react'

const { adidas } = projects;

export const Adidas = () => (
  <Layout pageTitle={adidas.title}>
    <Project project={adidas} />
  </Layout>
);


