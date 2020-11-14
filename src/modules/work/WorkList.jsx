import React from 'react'

import { projectList } from '@src/data';
import { WorkItem } from '@src/modules/work';
import { GlobalStateContext } from '@src/context';


export const WorkList = () => {
  const { workSorting } = React.useContext(GlobalStateContext);
  return (
    <div>
      {projectList.sort((a, b) => {
        return (workSorting === 'asc' ? a.year - b.year : b.year - a.year);
      }).map((project, index) => (
        <WorkItem project={project} index={index} key={project.title}/>
      ))}
    </div>
  )
};
