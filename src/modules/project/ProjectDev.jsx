import { ProjectFeatures, ProjectTech } from '@src/modules/project'
import { Text } from '@src/ui/components'
import React from 'react'
import styled from 'styled-components'

const StyledProjectDev = styled.section`
  margin: 10px auto 60px;
`;

export const ProjectDev = ({ devDesc, features }) => (
  <StyledProjectDev>
    <Text type='heading'>Introspective</Text>
    {devDesc.map((paragraph) => (
      <Text key={`DevDesc-${paragraph}`}>{paragraph}</Text>
    ))}
  </StyledProjectDev>
);
