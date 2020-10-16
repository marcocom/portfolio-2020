import React from 'react'

import { projectList } from '@src/data'
import { WorkItem } from '@src/modules/work'

export const WorkList = () => (

  <div>
    {projectList.sort((a, b) => a.year - b.year).map((project, index) => (
      <WorkItem project={project} index={index} key={project.title} />
    ))}
  </div>
);
